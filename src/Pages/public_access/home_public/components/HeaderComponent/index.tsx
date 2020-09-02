import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import Logo from '../../assets/Home/logo.svg'

import './styles.css'

const HeaderComponent = () => {
    return (
        <>
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
        </>
    )
}

export default HeaderComponent