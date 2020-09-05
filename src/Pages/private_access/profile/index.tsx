import React from 'react'
import { Link } from 'react-router-dom'

import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'
import MeComponent from './components/MeComponent/index'
import SkillsComponent from './components/SkillsComponent/index'
import BioComponent from './components/BioComponent/index'

import './styles.css'

const ProfilePrivate = () => {
    return (
        <div className="profilePrivate-page">
            <div className="profilePrivate-content">
                <HeaderComponent />
                
                <div className="profilePrivate-content-main">
                    <MeComponent />
                    <SkillsComponent />
                </div>

                <BioComponent />

            </div>
        </div>
    )
}

export default ProfilePrivate