import React from 'react'

import Montain from '../../assets/Home/Montain.png'

import './styles.css'


const InfoSectionComponent = () => {
    return (
        <div className="homePublic-section1">
            <div className="section1-content">
                <div className="section1-title">
                </div>
                <div className="section-img">
                    <img src={Montain} />
                </div>

                <div className="section1-info">
                    <div className="section1-info-top">
                        <p className="section1-date">De 16/11 à 18/12 de 2020</p>
                        <p className="section1-method">Online</p>
                    </div>

                    <div className="section1-info-bottom">
                        <p className="section1-info-title">O que é um Hackathon?</p>
                        <p className="section1-description">Hackathons são maratonas que envolvem pessoas interessadas em solucionar problemas e desenvolver soluções inovadoras para questões específicas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSectionComponent