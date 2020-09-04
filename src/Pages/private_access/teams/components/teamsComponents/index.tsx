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

                    <div className="teamsPrivate-section2">
                        <div className="teamsPrivate-main-card">
                            <div className="teamsPrivate-teams-section">
                                <div className="teamsPrivate-teams-item">
                                    <div className="teamsPrivate-item-header">
                                        <p className='teamsPrivate-item-title'>Time 1</p>
                                        <FaRegUser size='30' color='#f4f4f4'/>
                                        <p className='teamsPrivate-item-count'>0/5</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="teamsPrivate-main-card">
                            <div className="teamsPrivate-teams-section">
                                <div className="teamsPrivate-teams-item">
                                    <div className="teamsPrivate-item-header">
                                        <p className='teamsPrivate-item-title'>Time 1</p>
                                        <FaRegUser size='30' color='#f4f4f4'/>
                                        <p className='teamsPrivate-item-count'>0/5</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default TeamsPrivate