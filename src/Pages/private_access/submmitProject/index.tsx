import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'
import api from '../../../services/api'

import { IoIosArrowRoundBack } from 'react-icons/io'
import { AiOutlineLink, AiOutlineCode } from 'react-icons/ai'
import { RiSlideshow2Line } from 'react-icons/ri'
import { FiYoutube } from 'react-icons/fi'

import './styles.css'

interface User {
    team: number
}


const LoginPage = () => {

    const alert = useAlert()

    const history = useHistory()

    const [user, setUser] = useState<User>({} as User);

    const token = localStorage.getItem("Auth")
    if (!token) {
        history.push('/login')
    }

    useEffect(() => {
        api.get('/user', {
            headers: {
                Authorization: token,
            }
        }).then(response => {  
            setUser(response.data);
          });
    }, [token, user]);

    const [challenge, setChallenge] = useState('')
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [pitch, setPitch] = useState('')
    const [presentation, setPresentation] = useState('')
    const [code, setCode] = useState('')
    const [other, setOther] = useState('')

    async function handleSubmitProject(e) {
        e.preventDefault() 

        await api.post('/submit-project', {
            challenge,
            description, 
            name,
            pitch, 
            presentation, 
            code, 
            other,
            team_id: user.team
        }).then(() => {
            history.push('/home')
        }).catch(() => {
            alert.error('Ops! Tente novamente')
        })
    }

    return (
        <div id="submitProject-page">
            <div className="submitProject-content">

                <div className="submitProject-header">
                    <Link to="/home" >
                        <IoIosArrowRoundBack className="submitProject-backButton" size="50" color="#f4f4f4" />
                    </Link>
                    <p className="submitProject-text">Ufa, Vamos enviar nosso projeto!</p>
                </div>

                <div className="submitProject-form">
                    <form 
                        onSubmit={handleSubmitProject}
                        autoComplete="off"
                    >

                        <div className="submitProject-field">	
                            <span>Desafio</span>	
                            <select 	
                                name="school"  	
                                id="school" 	
                                onChange={e => setChallenge(e.target.value)}	
                            >	
                                <option value="" hidden selected disabled>Selecione um desafio</option>	
                                <option value="Comunicação">Comunicação</option>	
                                <option value="Educação">Educação</option>	
                                <option value="Profissão">Profissão</option>	
                                <option value="Saúde">Saúde</option>	
                            </select>	
                        </div>  
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
                                placeholder="Conte-nos sobre o projeto"
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
                            <span>Apresentação</span>
                            <div className="submitProject-field-input">
                                <RiSlideshow2Line size="26" color="#2FDF84" />
                                <input
                                    type="text"
                                    name="presentation"
                                    id="presentation"
                                    autoCapitalize="none"
                                    placeholder="Cole aqui o link do apresentação"
                                    onChange={e => setPresentation(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="submitProject-field">
                            <span>Código</span>
                            <div className="submitProject-field-input">
                                <AiOutlineCode size="26" color="#2FDF84" />
                                <input
                                    type="text"
                                    name="code"
                                    id="code"
                                    autoCapitalize="none"
                                    placeholder="Cole aqui o link do repositório no Github"
                                    onChange={e => setCode(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="submitProject-field">
                            <span>Outros</span>
                            <div className="submitProject-field-input">
                                <AiOutlineLink size="26" color="#2FDF84" />
                                <input
                                    type="text"
                                    name="other"
                                    id="other"
                                    autoCapitalize="none"
                                    placeholder="Caso queira nos mostrar algo mais..."
                                    onChange={e => setOther(e.target.value)}
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