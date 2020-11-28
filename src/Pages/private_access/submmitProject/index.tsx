import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'
import api from '../../../services/api'

import { IoIosArrowRoundBack } from 'react-icons/io'
import { AiOutlineLink } from 'react-icons/ai'
import { FiYoutube } from 'react-icons/fi'

import './styles.css'


const LoginPage = () => {

    const alert = useAlert()

    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [pitch, setPitch] = useState('')
    const [apresentation, setApresentation] = useState('')

    function handleSubmitProject() {

    }

    return (
        <div id="submitProject-page">
            <div className="submitProject-content">

                <div className="submitProject-header">
                    <Link to="/" >
                        <IoIosArrowRoundBack className="submitProject-backButton" size="50" color="#f4f4f4" />
                    </Link>
                    <p className="submitProject-text">Ufa, Vamos enviar nosso projeto!</p>
                </div>

                <div className="submitProject-form">
                    <div className="submitProject-teamInfo">
                        <p>Meu time</p>
                    </div>
                    <form 
                        onSubmit={handleSubmitProject}
                        autoComplete="off"
                    >
                        <div className="submitProject-field">
                        <span>Nome</span>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoCapitalize="none"
                                placeholder="Digite o nome do projeto"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="submitProject-field">
                        <span>Descrição</span>
                            <textarea
                                name="description"
                                id="description"
                                autoCapitalize="none"
                                placeholder="Conte sobre o projeto"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="submitProject-field">
                            <p><b>Obs.:</b> Os videos devem ser postados no youtube e apenas os links serão enviados aqui.</p>
                        </div>

                        <div className="submitProject-field">
                            <span>Pitch <b>*</b></span>
                            <div className="submitProject-field-input">
                                <FiYoutube size="26" color="#2FDF84" />
                                <input
                                    type="text"
                                    name="pitch"
                                    id="pitch"
                                    autoCapitalize="none"
                                    placeholder="Cole aqui o link do pitch"
                                    onChange={e => setPitch(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="submitProject-field">
                            <span>Apresentação <b>*</b></span>
                            <div className="submitProject-field-input">
                                <AiOutlineLink size="26" color="#2FDF84" />
                                <input
                                    type="text"
                                    name="apresentação"
                                    id="apresentação"
                                    autoCapitalize="none"
                                    placeholder="Cole aqui o link do apresentação"
                                    onChange={e => setApresentation(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="form-submitButton">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage