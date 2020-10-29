import React from 'react'

// Image
import Illustration from '../../assets/Home/homeIllustration.svg'

import './styles.css'

const InfoSectionComponent = () => {
    return (
        <div className="homePublic-section1">
            <div className="section1-content">
                <img src={Illustration} />

                <div className="section1-info">
                    <div className="section1-info-top">
                        <p className="section1-date">De ## à ## de Novembro de 2020</p>
                        <p className="section1-method">Online</p>
                    </div>

                    <div className="section1-info-bottom">
                        <p className="section1-title">O que é um Hackathon?</p>
                        <p className="section1-description">Hackathons são maratonas que envolvem pessoas interessadas em solucionar problemas e desenvolver soluções inovadoras para questões específicas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSectionComponent