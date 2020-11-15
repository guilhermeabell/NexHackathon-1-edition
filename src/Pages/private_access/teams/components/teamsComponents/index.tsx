import React, { useEffect, useState, Component } from 'react'
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom'
import { IoIosGitNetwork } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosCloseCircle } from 'react-icons/io'

import api from '../../../../../services/api'

import './styles.css'

interface Teams {
    id_teams: string,
    title: string,
}

interface Team {
    id_teams: number;
    title: string;
}

interface Members {
    id_user: number;
    name: string;
}

const TeamsPrivate = () => {

    const [modal, setModal] = useState(false)

    const [team, setTeam] = useState<Team>({} as Team);
    const [membersTeam, setMmebersTeam] = useState<Members[]>([]);

    async function openModal(id_teams: string) {

        await api.get(`/team/${id_teams}`).then((response) => {
            setTeam(response.data)
            console.log(response.data)
        })

        await api.get(`/members-team/${id_teams}`).then((response) => {
            setMmebersTeam(response.data)
            console.log(response.data)
        })

        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }

    const [teams, setTeams] = useState<Teams[]>([])

    useEffect(() => {
        api.get('/teams').then((response) => {
            setTeams(response.data)
        })
    })

    return (
        <div className="teamsPrivate-main">
            <div className="teamsPrivate-main-content">

                <Modal 
                    visible={modal}
                    effect="fadeInDown"
                    onClickAway={() => closeModal()}
                >
                    <div className="teamsPrivate-modal">
                        <div className="teamsPrivate-modal-header">
                            <div className="modal-header-text">
                                <p className="teamsPrivate-modal-title">Time {team.id_teams}</p>
                                <p className="teamsPrivate-modal-subtitle">{team.title}</p>
                            </div>
                            <IoIosCloseCircle size="30" color="#ef233c" onClick={closeModal} />
                        </div>

                        <div className="teamsPrivate-modal-main">
                        {membersTeam.map((member, index) => (
                            <p className="teamsPrivate-modal-user" key={member.id_user} >{member.name}</p>
                        ))}
                        </div>

                        <div className="teamsPrivate-modal-footer">
                            <p className="teamsPrivate-modal-footer-title">Esses são os integrantes desta equipe.</p>
                            <p className="teamsPrivate-modal-footer-subtitle">Que tal fazer conexão com eles?</p>
                        </div>
                    </div>
                </Modal>

                    <div className="teamsPrivate-main-button">
                            <Link to="/create-team">
                                <p>Criar time</p>
                                <AiOutlinePlus size="20" color="#fff" />
                            </Link>
                    </div>

                    <div className="teamsPrivate-title-section">
                        <p className="teamsPrivate-title">Veja também outros times!</p>
                    </div>

                    <div className="teamsPrivate-main-section">
                        
                        {teams.map((team, index) => (
                        <div className="teamsPrivate-main-card" onClick={() => openModal(team.id_teams)} key={team.id_teams}>
                            <p className='teamsPrivate-item-title'>Time {team.id_teams}</p>
                            <IoIosGitNetwork size='25' color='#f4f4f4'/>
                        </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default TeamsPrivate