import React from 'react'

import ThemesTitle from '../../assets/Home/themeTitle.svg'

// Icones dos cards de Temas
import ComunityIcon from '../../assets/Home/cardIcons/comunity.svg'
import EducationIcon from '../../assets/Home/cardIcons/education.svg'
import HealthIcon from '../../assets/Home/cardIcons/health.svg'
import BusinessIcon from '../../assets/Home/cardIcons/business.svg'

// Waves 
import WaveSection1 from '../../assets/Home/waves/waveSection1.svg'

import './styles.css'
import { Link } from 'react-router-dom'

const ThemesSectionComponent = () => {
    return (
        <>
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

                <Link 	                
                    to={{ pathname: 'http://3.228.101.223:3333/uploads/nexplay.pdf'}} 	
                    target="_blank" 	
                >
                    <div className="themesButton">
                        <p>Acessar desafios</p>
                    </div>
                </Link>
            </div>

        </div>
        <img className="InfoSectionWave" src={WaveSection1} />
        </>
    )
}

export default ThemesSectionComponent