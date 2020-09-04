import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'

import Logo from '../../assets/images/logo.svg'

import './styles.css'

const HeaderComponent = () => {
    return (
        <>
        <div className="homePrivate-header">
            <div className="header-content">
                    <img src={Logo} />

                <div className="header-links">
                    <Link to="/home">
                        <FiHome size='30' color='#76D9B9' />
                    </Link>
                </div>
            </div>
            <hr className="header-line" />
        </div>
        </>
    )
}

export default HeaderComponent