import React from 'react'

// Components
import HeaderComponent from './components/HeaderComponent/index'
import InfoSectionComponent from './components/InfoSection/index'
import ThemesSectionComponent from './components/ThemesSection/index'
import TimeLineComponent from './components/Timeline/index'
import AboutSectionComponent from './components/AboutSection/index'
import AwardSectionComponent from './components/AwardSection/index'

import './styles.css'

const PublicHomePage = () => {
    return (
        <div id="homePublic-page">
            <div className="homePublic-content">

                {/* Header */}
                <HeaderComponent />

                {/* Primeira Seção */}
                <InfoSectionComponent />

                {/* Segunda Seção */}
                <ThemesSectionComponent />
            
                {/* Terceira Seção */}
                <TimeLineComponent />

                {/* Quarta Seção */}
                <AboutSectionComponent />

                {/* Quinta Seção */}
                <AwardSectionComponent />

            </div>
        </div>
    )
}

export default PublicHomePage