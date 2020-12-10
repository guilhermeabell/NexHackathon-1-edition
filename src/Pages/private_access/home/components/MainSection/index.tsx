import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const MainComponent = () => {
    return (
        <div className="homePrivate-main">
            <div className="homePrivate-main-content">

              <div className="main-section">

                <div className="main-item-container">
                    <p className="main-item-container-title">Estamos na reta final da maratona. Envie seu projeto!</p>
                    <Link to="/submit-project">
                        <div className="main-item-button">
                            <p>Enviar projeto</p>
                        </div>
                    </Link>
                </div>

                <div className="main-item-container">
                    <p className="main-item-alert">Foi bom enquanto durou :(</p>
                    <p className="main-item-title">Infelizmente nossa maratona está acabando, esperamos que você tenha aprendido muito. Nos vemos nas próximas edições!</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default MainComponent