import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import InputMask from 'react-input-mask';
import { useAlert } from 'react-alert'

import api from '../../../services/api'

import './styles.css'


const PublicHomePage = () => {

    const alert = useAlert()

    function onSuccess() {
            history.push('/success-flash')
        setTimeout(() => {
            history.push('/login')
        }, 3000);
    }

    const [name, setName] = useState("")
    const [ra, setRa] = useState("")
    const [school, setSchool] = useState("")
    const [date_of_birth, setDate_of_birth] = useState("")
    const [cell_phone, setCell_phone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    var value = 0
    var color = '#db3249'
    var passForce = ''

    if(password.match(/[a-z]+/)){
        value += 25;
	}
	if(password.match(/[A-Z]+/)){
        value += 25;
    }
    if(password.length >= 8) {
        value += 25;
    }
	if(password.match(/[!|@|#|$|%|^|&|*|(|)|-|_]/)){
        value += 25;
    }

    if(value >= 25){
        passForce = 'Fraca';
	}
	if(value >= 50){
        passForce = 'Aceitável';
            color = '#07F9A2';
    }
    if(value == 100) {
        passForce = 'Segura';
        color = '#07F9A2';
    }

    const verifyStage = {
        width: `${value}%`, 
        background: `${color}`,
    } as React.CSSProperties;

    async function handleRegister(e) {
        e.preventDefault();
    
        const data = {
            name,
            ra,
            school,
            date_of_birth,
            cell_phone,
            email,
            password,
        };
    
        
        if(!name) {
            alert.error('Precisamos de um RA!')
        } else {
            if(!school) {
                alert.error('Selecione a sua escola!')
            } else {
                if(!date_of_birth) {
                    alert.error('Coloque sua data de nascimento!')
                } else { 
                    if(!cell_phone) {
                        alert.error('Informe o seu celular!')
                    } else {
                        if(!email) {
                            alert.error('Precisamos de um e-mail!')
                        } else {
                            if(!password) {
                                alert.error('Sua senha é importante!')
                            } else {
                                if(value >= 50) {
                                    try {
                                        await api.post("/users", data);
                                        onSuccess()
                                    } catch (err) {
                                        console.log(err);
                                        alert.error("Erro no cadastro, tente novamente");
                                    }
                                } else {
                                    alert.error('Tente uma senha mais forte!')
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    

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
                
                    <form 
                        onSubmit={handleRegister}
                        autoComplete="off"
                    >
                        <div className="registerForm-field">
                            <span>Nome</span>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Digite seu nome"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>  

                        <div className="registerForm-field">
                            <span>Escola</span>
                            <select 
                                name="school"  
                                id="school" 
                                onChange={e => setSchool(e.target.value)}
                            >
                                <option value="" hidden selected disabled>Selecione sua escola</option>
                                <option value="Vicente Leporace">Vicente Leporace</option>
                                <option value="ETEC Uirapuru">ETEC Uirapuru</option>
                            </select>
                        </div>  

                        <div className="registerForm-field">
                            <span>Data de Nascimento</span>
                            <InputMask 
                                type="text" 
                                name="date_of_birth" 
                                id="date_of_birth" 
                                mask="99/99/9999" 
                                maskChar={null} 
                                placeholder="Digite sua data de nascimento"
                                onChange={e => setDate_of_birth(e.target.value)}
                            />
                        </div>   

                        <div className="registerForm-field">
                            <span>Telefone</span>
                            <InputMask 
                                type="text" 
                                name="phone"
                                id="phone" 
                                mask="(99) 99999-9999" 
                                maskChar={null} 
                                placeholder="Digite seu telefone"
                                onChange={e => setCell_phone(e.target.value)}
                            />
                        </div> 

                        <div className="registerForm-field">
                            <span>Email</span>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Digite seu melhor email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>    

                        <div className="registerForm-field">
                            <span>Senha</span>
                            <input 
                                type="password" 
                                name="password"
                                id="password" 
                                placeholder="Digite sua senha"
                                onChange={e => setPassword(e.target.value)}
                            />

                            <div className="forcebar">
                                <div className="forcebar-load" style={verifyStage} ></div>
                            </div>
                            <p>{passForce}</p>
                        </div>

                        <div className="form-submitButton">
                            <button type="submit">Finalizar Cadastro</button>
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