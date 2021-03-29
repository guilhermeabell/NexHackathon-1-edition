import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'

import './styles.css'


const SuccessFlash = () => {

    return (
        <div className={`success-alert`} >
            <BsCheckCircle size="100" color="#2FDF84" />
            <p className="success-alert-title">Parabens!</p>
            <p className="success-alert-text">Seu projeto foi enviado.</p>
        </div>

    )
}

export default SuccessFlash