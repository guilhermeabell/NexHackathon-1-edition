import React from 'react'
import { Link } from 'react-router-dom'

import { IoIosArrowRoundBack } from 'react-icons/io'

import './styles.css'

const LoginPage = () => {
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
                    <form action="">
                        <div className="loginForm-field">
                        <span>E-mail</span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoCapitalize="none"
                                autoComplete="false"
                                placeholder="Digite seu e-mail"
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
                            />
                        </div>

                        <div className="form-submitButton">
                            <Link to="/home">
                                <button type="submit">Fazer Login</button>
                            </Link>
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