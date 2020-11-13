import React, { useEffect, useState, Component } from 'react'
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosCloseCircle } from 'react-icons/io'

import api from '../../../../../services/api'

import './styles.css'

interface Teams {
    id_teams: number,
    title: string,
}

const TeamsPrivate = () => {

    const [modal, setModal] = useState(false)

    const [team, setTeam] = useState('')

    function openModal(id_teams) {

        api.get('/team').then((response) => {
            if(response && response.data) {
                setTeam(response.data)
            }
        })

        console.log(team)

        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }

    const [teams, setTeams] = useState<Teams[]>([])

    useEffect(() => {
        api.get('/teams').then((response) => {
            if(response && response.data) {
                setTeams(response.data)
            }
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
                                <p className="teamsPrivate-modal-title">Time 1</p>
                                <p className="teamsPrivate-modal-subtitle">Roda de samba</p>
                            </div>
                            <IoIosCloseCircle size="30" color="#ef233c" onClick={closeModal} />
                        </div>

                        <div className="teamsPrivate-modal-main">
                            <p className="teamsPrivate-modal-user">Pedro Augusto Ribeiro Marques</p>
                            <p className="teamsPrivate-modal-user">João Araujo Costa</p>
                            <p className="teamsPrivate-modal-user">Igor de Paula Gonçalves</p>
                            <p className="teamsPrivate-modal-user">Gabriel Mochnacz Cangelli</p>
                            <p className="teamsPrivate-modal-user">Eduarda da Silva</p>
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
                            <div className="teamsPrivate-item-header">
                                <p className='teamsPrivate-item-title'>Time {team.id_teams}</p>
                                <div className="card-header-count">
                                    <FaRegUser size='25' color='#f4f4f4'/>
                                    <p className='teamsPrivate-item-count'>2/5</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default TeamsPrivate