import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'

import api from '../../../../../services/api'

import './styles.css'

interface Teams {
    id_teams: number,
    title: string,
}

interface UsersTeam {
    id_user: number,
    name: string,
}

const TeamsPrivate = () => {

    const [teams, setTeams] = useState<Teams[]>([])
    const [users, setUsers] = useState<UsersTeam[]>([])

    useEffect(() => {
        api.get('/teams').then((response) => {
            if(response && response.data) {
                setTeams(response.data)
            }
        })
    })

    useEffect(() => {
        api.get('/users-team').then((response) => {
            if(response && response.data) {
                setUsers(response.data)
            }
        })
    })

    return (
        <div className="teamsPrivate-main">
            <div className="teamsPrivate-main-content">
                    <div className="teamsPrivate-title-section">
                        <p className="teamsPrivate-title">Veja também outros times!</p>
                    </div>

                    <div className="teamsPrivate-main-section">
                        
                        {teams.map((team, index) => (
                        <div className="teamsPrivate-main-card" key={team.id_teams}>
                            <div className="teamsPrivate-item-header">
                                <p className='teamsPrivate-item-title'>Time {team.title}</p>
                                <div className="card-header-count">
                                    <FaRegUser size='25' color='#f4f4f4'/>
                                    <p className='teamsPrivate-item-count'>2/5</p>
                                </div>
                            </div>

                            <div className="teamsPrivate-item-main">
                                <p>Pedro Henrique</p>
                                <p>Julio Antonio</p>
                            </div>

                            <div className="teamsPrivate-item-footer">
                                <button style={{display: "none"}}>Participar</button>
                            </div>
                        </div>
                        ))}

                    </div>
            </div>
        </div>
    )
}

export default TeamsPrivate