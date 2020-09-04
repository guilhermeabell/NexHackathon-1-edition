import React from 'react'

import { Link } from 'react-router-dom'

import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'

import TeamsPrivate from './components/teamsComponents/index'

import './styles.css'

const PublicHomePage = () => {
    return (
        <div className="teamsPrivate-page">
            <div className="teamsPrivate-content">
                <HeaderComponent />

                <TeamsPrivate />
            </div>
        </div>
    )
}

export default PublicHomePage