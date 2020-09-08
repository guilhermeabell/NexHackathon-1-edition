import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'

import './styles.css'


const SuccessFlash = () => {

    return (
        <div className={`success-alert`} >
            <BsCheckCircle size="100" color="#2FDF84" />
            <p className="success-alert-title">Cadastro concluído.</p>
            <p className="success-alert-text">Agora você está participando!</p>
        </div>

    )
}

export default SuccessFlash