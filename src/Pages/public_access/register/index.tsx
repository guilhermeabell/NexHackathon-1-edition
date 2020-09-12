import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import InputMask from 'react-input-mask';
import api from '../../../services/api'


import './styles.css'


const PublicHomePage = () => {

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
    
        try {
          const response = await api.post("/users", data);
    
          onSuccess()

        } catch (err) {
          console.log(err);
          alert("Erro no cadastro, tente novamente");
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
                
                    <form onSubmit={handleRegister}>
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
                            <span>RA</span>
                            <InputMask 
                                type="text" 
                                name="ra" 
                                id="ra" 
                                mask="000999999999-9" 
                                maskChar={null} 
                                placeholder="Digite seu RA"
                                onChange={e => setRa(e.target.value)}
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
                                <option value="2">Escola 3</option>
                            </select>
                        </div>  

                        <div className="registerForm-field">
                            <span>Data de Nascimento</span>
                            <InputMask 
                                type="text" 
                                name="date_of_birth" 
                                id="date_of_birth" 
                                mask="99-99-9999" 
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