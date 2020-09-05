import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'

import './styles.css'

const TeamsPrivate = () => {
    return (
        <div className="teamsPrivate-main">
            <div className="teamsPrivate-main-content">
                    <div className="teamsPrivate-title-section">
                        <p className="teamsPrivate-title">Veja também outros times!</p>
                    </div>

                    <div className="teamsPrivate-main-section">
                        <div className="teamsPrivate-main-card">
                            <div className="teamsPrivate-item-header">
                                <p className='teamsPrivate-item-title'>Time 1</p>
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
                                <button>Participar</button>
                            </div>
                        </div>

                        <div className="teamsPrivate-main-card">
                            <div className="teamsPrivate-item-header">
                                <p className='teamsPrivate-item-title'>Time 2</p>
                                <div className="card-header-count">
                                    <FaRegUser size='25' color='#f4f4f4'/>
                                    <p className='teamsPrivate-item-count'>3/5</p>
                                </div>
                            </div>

                            <div className="teamsPrivate-item-main">
                                <p>Miguel Murilo Vieira</p>
                                <p>Tânia Lívia Carla</p>
                                <p>Tereza Olivia</p>
                            </div>

                            <div className="teamsPrivate-item-footer">
                                <button>Participar</button>
                            </div>
                        </div>

                        <div className="teamsPrivate-main-card">
                            <div className="teamsPrivate-item-header">
                                <p className='teamsPrivate-item-title'>Time 3</p>
                                <div className="card-header-count">
                                    <FaRegUser size='25' color='#f4f4f4'/>
                                    <p className='teamsPrivate-item-count'>2/5</p>
                                </div>
                            </div>

                            <div className="teamsPrivate-item-main">
                                <p>Laís Luzia</p>
                                <p>Martin Roberto</p>
                            </div>

                            <div className="teamsPrivate-item-footer">
                                <button>Participar</button>
                            </div>
                        </div>

                        <div className="teamsPrivate-main-card">
                            <div className="teamsPrivate-item-header">
                                <p className='teamsPrivate-item-title'>Time 1</p>
                                <div className="card-header-count">
                                    <FaRegUser size='25' color='#f4f4f4'/>
                                    <p className='teamsPrivate-item-count'>5/5</p>
                                </div>
                            </div>

                            <div className="teamsPrivate-item-main">
                                <p>Mirella Sônia Galvão</p>
                                <p>Márcia Olivia</p>
                                <p>Márcio Tiago Figueiredo</p>
                                <p>Daiane Vanessa Lívia Figueiredo</p>
                                <p>Manuel Cauê Diogo Galvão</p>
                            </div>

                            <div className="teamsPrivate-item-footer">
                                <button style={{display: "none"}}>Participar</button>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    )
}

export default TeamsPrivate