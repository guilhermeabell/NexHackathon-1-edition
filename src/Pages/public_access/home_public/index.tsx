import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import Logo from './assets/Home/logo.svg'
import Illustration from './assets/Home/homeIllustration.svg'
import ThemesTitle from './assets/Home/themeTitle.svg'

// Icones dos cards de Temas
import ComunityIcon from './assets/Home/cardIcons/comunity.svg'
import EducationIcon from './assets/Home/cardIcons/education.svg'
import HealthIcon from './assets/Home/cardIcons/health.svg'
import BusinessIcon from './assets/Home/cardIcons/business.svg'

// Waves 
import WaveSection1 from './assets/Home/waves/waveSection1.svg'

import './styles.css'

const PublicHomePage = () => {
    return (
        <div id="homePublic-page">
            <div className="homePublic-content">

                {/* Header */}
                <div className="homePublic-header">
                    <div className="header-content">
                            <img src={Logo} />

                        <div className="header-links">
                            <Link to="/register">
                                <button>
                                    Como funciona?
                                </button>
                            </Link>


                            <Link to="/login">
                                <FiLogIn size='30' color='#76D9B9' />
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="header-line" />

                {/* Primeira Seção */}
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

                {/* Segunda Seção */}
                <div className="homePublic-section2">
                    <div className="section2-content">
                        <img className="themesTitle" src={ThemesTitle} />

                        <div className="section2-cards">

                            <div className="section2-card">
                                <img className="section2-card-image" src={ComunityIcon} />

                                <p className="section2-card-title">Comunidade</p>
                            </div>

                            <div className="section2-card">
                                <img className="section2-card-image" src={EducationIcon} />

                                <p className="section2-card-title">Educação</p>
                            </div>

                            <div className="section2-card">
                                <img className="section2-card-image" src={HealthIcon} />

                                <p className="section2-card-title">Saúde</p>
                            </div>

                            <div className="section2-card">
                                <img className="section2-card-image" src={BusinessIcon} />

                                <p className="section2-card-title">Profissão</p>
                            </div>

                        </div>
                    </div>

                </div>
                <img className="waves" src={WaveSection1} />

            
                {/* Terceira Seção */}
                <div className="homePublic-section3">
                    <div className="section3-content">
                        <p className="section3-title" >Nossa trajetória</p>

                        <div className="section3-timeline">
                            <div className="section3-timeline-line" />
                            <div className="section3-timeline-dots">
                                <div className="section3-timeline-dot" />
                                <div className="section3-timeline-dot" />
                                <div className="section3-timeline-dot" />
                                <div className="section3-timeline-dot" />
                                <div className="section3-timeline-dot" />
                            </div>
                            <hr className="section3-line" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicHomePage