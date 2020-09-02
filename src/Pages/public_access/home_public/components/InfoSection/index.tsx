import React from 'react'

// Image
import Illustration from '../../assets/Home/homeIllustration.svg'

import './styles.css'

const InfoSectionComponent = () => {
    return (
        <>
        <div className="homePublic-section1">
            <div className="section1-content">
                <img src={Illustration} />

                <div className="section1-info">
                    <div className="section1-info-top">
                        <p className="section1-date">De 3 à 17 de Agosto de 2020</p>
                        <p className="section1-method">Online</p>
                    </div>

                    <div className="section1-info-bottom">
                        <p className="section1-title">O que é um Hackathon?</p>
                        <p className="section1-description">O hackaton é um evento no qual utilizamos a tecnologia e a criatividade para solucionar problemas do dia a dia, e propor ideias inovadoras.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="moving-mouse-holder">
            <div className="mouse">
            <div className="mouse-button">&nbsp;</div>
            </div>
        </div>
    </>
    )
}

export default InfoSectionComponent