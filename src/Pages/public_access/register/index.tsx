import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

import './styles.css'

import CryIcon from './assets/cry.svg'


const PublicHomePage = () => {

    return (
        <div id="registerPublic-page">
            <div className="registerPublic-content">
                <div className="registerPublic-main">
                    <img src={CryIcon} />
                    <p>Infelizmente as inscrições foram finalizadas, mas esperamos você nas próximas edições. <Link to="/">Voltar</Link></p>
                </div>
            </div>
        </div>
    )
}

export default PublicHomePage