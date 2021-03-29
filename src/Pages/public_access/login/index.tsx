import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'
import api from '../../../services/api'

import { IoIosArrowRoundBack } from 'react-icons/io'

import './styles.css'

const LoginPage = () => {

    const alert = useAlert()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault() 
        
        try{
            const response = await api.post('/auth', {email, password})

            localStorage.setItem('Auth', response.data.token)
            history.push('/home')
        } catch (err) {
            console.log(err);
            alert.error('Ops! Tente novamente')
        }
    }

    return (
        <div id="loginPublic-page">
            <div className="loginPublic-content">

                <div className="loginPublic-header">
                    <Link to="/" >
                        <IoIosArrowRoundBack className="login-backButton" size="50" color="#f4f4f4" />
                    </Link>
                    <p className="login-text">É bom te ver por aqui!</p>
                </div>

                <div className="loginPublic-form">
                    <form 
                        onSubmit={handleLogin}
                        autoComplete="off"
                    >
                        <div className="loginForm-field">
                        <span>E-mail</span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoCapitalize="none"
                                placeholder="Digite seu e-mail"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="loginForm-field">
                        <span>Senha</span>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoCapitalize="none"
                                autoComplete="off"
                                placeholder="Digite sua senha"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-submitButton">
                            <button type="submit">Fazer Login</button>
                        </div>
                    </form>
                </div>
                
                <div className="loginPublic-footer">
                    <p>Ainda não está participando?</p> <Link to="/register">Cadastre-se</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage