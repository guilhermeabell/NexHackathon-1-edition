import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import InputMask from 'react-input-mask';

import './styles.css'


const PublicHomePage = () => {
    return (
        <div id="registerPublic-page">
            <div className="registerPublic-content">
                <div className="registerPublic-header">
                    <Link to="/">
                        <IoIosArrowRoundBack className="login-backButton" size="50" color="#f4f4f4" />
                    </Link>
                    <p className="register-text">Crie sua conta.</p>
                </div>
                <div className="registerPublic-form">
                    <form action="">
                        <div className="registerForm-field">
                            <span>Nome</span>
                            <input type="text" name="name" id="name" placeholder="Digite seu nome"/>
                        </div>

                        <div className="registerForm-field">
                            <span>RA</span>
                            <InputMask type="text" name="ra" id="ra" mask="000999999999-9" maskChar={null} placeholder="Digite seu RA"/>
                        </div>   

                        <div className="registerForm-field">
                            <span>Escola</span>
                            <select name="school" id="school">
                                <option value="" hidden selected disabled>Selecione sua escola</option>
                                <option value="0">Escola 1</option>
                                <option value="1">Escola 2</option>
                                <option value="2">Escola 3</option>
                            </select>
                        </div>  

                        <div className="registerForm-field">
                            <span>Data de Nascimento</span>
                            <InputMask type="text" name="birthday" id="birthday" mask="99/99/9999" maskChar={null} placeholder="Digite sua data de nascimento"/>
                        </div>   

                        <div className="registerForm-field">
                            <span>Telefone</span>
                            <InputMask type="text" name="phone" id="phone" mask="(99) 99999-9999" maskChar={null} placeholder="Digite seu telefone"/>
                        </div> 

                        <div className="registerForm-field">
                            <span>Email</span>
                            <input type="email" name="email" id="email" placeholder="Digite seu melhor email"/>
                        </div>    

                        <div className="registerForm-field">
                            <span>Senha</span>
                            <input type="password" name="password" id="password" placeholder="Digite sua senha"/>
                        </div>

                        <div className="form-submitButton">
                            <Link to="/home">
                                <input type="submit" value="Finalizar cadastro"/>
                            </Link>
                        </div>
                    </form>

                    <div className="registerPublic-Footer">
                        <p>Ao realizar os cadastro você está aceitando os <Link to="">termos</Link> e <Link to="">códigos de conduta</Link> deste evento. Boa sorte! :)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicHomePage