import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

import api from '../../../services/api'


import './styles.css'
import { request } from 'http'

interface Users {
    id_user: number;
    name: string;
}


const CreateTeamPage = () => {

    function onSuccess() {
        history.push('/teams')
    }

    const [name, setName] = useState("")
    const [member, setMember] = useState("")

    const [userItems, setUserItems] = useState([
        { id: '', name: '' }
    ])

    const [available, setAvailable] = useState<Users[]>([])

    const history = useHistory()

    function addNewItem () {
        setUserItems([...userItems,
            { id: '', name: '' }
        ])
    }

    useEffect(() => {
        api.get('/available-users').then(response => {
            setAvailable(response.data)
        })
    })

    async function handleCreateTeam () {

        const data = {
            name,
        }

        try {
            const team_id = await api.post('/team', data)

            const values = {
                member,
                team_id
            }
          
            if (team_id) {
                const insertMember = await api.post('/insert-member', values)

                if (insertMember) {
                    onSuccess()
                }
            }
        } catch {

        }


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
                                            onChange={e => setMember(e.target.value)}
                                        >
                                            <option value="" hidden selected disabled>Selecione um integrante</option>
                                            {available.map((available) => (
                                                <option key={available.id_user} value={available.id_user}>
                                                    {available.name}
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