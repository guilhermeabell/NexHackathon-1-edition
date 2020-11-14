import React, { useState, useEffect, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useAlert } from 'react-alert'

import api from '../../../services/api'


import './styles.css'

interface Users {
    id_user: number,
    email: string
}

interface User {
    user_id: number,
    email: string,
}


const CreateTeamPage = () => {

    const alert = useAlert()

    const [user, setUser] = useState<User>({} as User);

    const token = localStorage.getItem("Auth")

    const history = useHistory()

    if (!token) {
        history.push('/login')
    }

    useEffect(() => {
        api.get('/user', {
            headers: {
                Authorization: token,
            }
        }).then(response => {  
            setUser(response.data);
          });
    }, [token, user]);

    const [name, setName] = useState("")

    const [userItems, setUserItems] = useState([
        { id: user.user_id, email: user.email },
        { id: '', email: '' },
        { id: '', email: '' },
        { id: '', email: '' }
    ])

    const [available, setAvailable] = useState<Users[]>([])

    function addNewItem () {
        setUserItems([
            ...userItems,
            { id: '', email: '' }
        ])
    }

    useEffect(() => {
        api.get('/available-users').then(response => {
            setAvailable(response.data)
        })
    })

    console.log(available)

    async function handleCreateTeam (e: FormEvent) {
        e.preventDefault()

        await api.post('/team', {
            name,
            members: userItems
        }).then(() => {
            history.push('/teams')
        }).catch(() => {
            alert.error('Ops! Tente novamente')
        })
    }

    function setUserItemValue(position: number, field: string, value: string) {
        const updateUserItems = userItems.map((userItem, index) => {
          if (index === position) {
            return { ...userItem, [field]: value };
          }
    
          return userItem;
        });
    
        setUserItems(updateUserItems);
      }

    return (
        <div id="createTeam-page">

            <div className="createTeam-content">
                <div className="createTeam-header">
                    <Link to="/teams">
                        <IoIosArrowRoundBack className="createTeam-backButton" size="50" color="#f4f4f4" />
                    </Link>
                    <p className="createTeam-text">Crie um time.</p>
                </div>
                <div className="createTeam-form">
                
                    <form onSubmit={handleCreateTeam}>
                        <div className="createTeamForm-field">
                            <span>Nome do time</span>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Digite um nome para o time"
                                onChange={e => setName(e.target.value)}
                            />
                        </div> 

                        <div className="createTeamForm-field-select">
                            <div className="field-header">
                                <span>Integrantes</span>
                                <button onClick={addNewItem} type="button">+ Novo Membro</button>
                            </div>

                            {userItems.map((userItem, index) => {
                                return (
                                    <div className="field-select" key={userItem.id}>
                                        <select 
                                            name="member"  
                                            id="member" 
                                            onChange={e => setUserItemValue(index, 'id',e.target.value)}
                                        >
                                            <option value="" hidden selected disabled>Selecione um integrante</option>
                                            {available.map((available) => (
                                                <option key={available.id_user} value={available.id_user}>
                                                    {available.email}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                );
                            })}
                        </div>                        

                        <div className="form-submitButton">
                            <button type="submit">Criar Time</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTeamPage