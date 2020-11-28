import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const MainComponent = () => {
    return (
        <div className="homePrivate-main">
            <div className="homePrivate-main-content">

              <div className="main-section">

                <div className="main-item-container">
                    <p className="main-item-container-title">Entre na comunidade e conheça os outros participantes!</p>
                    <Link to="/chat">
                        <div className="main-item-button">
                            <p>Entrar no chat</p>
                        </div>
                    </Link>
                </div>

                <div className="main-item-container">
                    <p className="main-item-alert">ALERTA!!</p>
                    <p className="main-item-title">Nós temos um encontro marcado semana que vem. Esperamos você :)</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default MainComponent