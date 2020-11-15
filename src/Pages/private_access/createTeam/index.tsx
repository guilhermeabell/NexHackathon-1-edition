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
    id: number,
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

    const [member1, setMember1] = useState('')
    const [member2, setMember2] = useState('')
    const [member3, setMember3] = useState('')
    const [member4, setMember4] = useState('')
    const [member5, setMember5] = useState('')

    const [available, setAvailable] = useState<Users[]>([])

    useEffect(() => {
        api.get('/available-users').then(response => {
            setAvailable(response.data)
        })
    })

    async function handleCreateTeam (e: FormEvent) {
        e.preventDefault()

        if(!name) {
            alert.error('Dê um nome para a equipe!')
        } else {
            if(!member2) {
                alert.error('Falta membro na equipe')
            } else {
                if(!member3) {
                    alert.error('Falta membro na equipe')
                } else {
                    if(!member4) {
                        alert.error('Falta membro na equipe')
                    } else {
                        if(!member5) {
                            alert.error('Falta membro na equipe')
                        } else {
                            await api.post('/team', {
                                name,
                                member1: user.id,
                                member2,
                                member3,
                                member4,
                                member5,
                            }).then(() => {
                                history.push('/teams')
                            }).catch(() => {
                                alert.error('Ops! Tente novamente')
                            })
                        }
                    }
                }
            }
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
                
                    <form 
                        onSubmit={handleCreateTeam}
                        autoComplete="off"
                    >
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
                            </div>

                            <div className="field-select">
                                <select 
                                    name="member"  
                                    id="member" 
                                    onChange={e => setMember1(e.target.value)}
                                >
                                    <option value={user.id} selected>{user.email}</option>
                                </select>
                            </div>

                            <div className="field-select">
                                <select 
                                    name="member"  
                                    id="member" 
                                    onChange={e => setMember2(e.target.value)}
                                >
                                    <option value="" hidden selected disabled>Selecione um integrante</option>
                                    {available.map((available) => (
                                        <option key={available.id_user} value={available.id_user}>
                                            {available.email}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="field-select">
                                <select 
                                    name="member"  
                                    id="member" 
                                    onChange={e => setMember3(e.target.value)}
                                >
                                    <option value="" hidden selected disabled>Selecione um integrante</option>
                                    {available.map((available) => (
                                        <option key={available.id_user} value={available.id_user}>
                                            {available.email}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="field-select">
                                <select 
                                    name="member"  
                                    id="member" 
                                    onChange={e => setMember4(e.target.value)}
                                >
                                    <option value="" hidden selected disabled>Selecione um integrante</option>
                                    {available.map((available) => (
                                        <option key={available.id_user} value={available.id_user}>
                                            {available.email}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="field-select">
                                <select 
                                    name="member"  
                                    id="member" 
                                    onChange={e => setMember5(e.target.value)}
                                >
                                    <option value="" hidden selected disabled>Selecione um integrante</option>
                                    {available.map((available) => (
                                        <option key={available.id_user} value={available.id_user}>
                                            {available.email}
                                        </option>
                                    ))}
                                </select>
                            </div>
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