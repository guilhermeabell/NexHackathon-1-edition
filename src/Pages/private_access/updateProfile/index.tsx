/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { FiSave } from 'react-icons/fi'
import api from '../../../services/api'

import Dropzone from '../../../Components/Dropzone/index'

import './styles.css'

const updateProfile = () => {

  const [selectedFile, setSelectedFile] = useState<File>();
  const [name, setName] = useState("")
  const [headline, setHeadline] = useState("")
  const [description, setDescription] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [github, setGithub] = useState("")
  const [instagram, setInstagram] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  async function handleSubmit(e) {
      e.preventDefault();

      const data = new FormData()

      data.append('name', name)
      data.append('headline', headline)
      data.append('description', description)
      data.append('linkedin', linkedin)
      data.append('github', github)
      data.append('instagram', instagram)
      data.append('password', password)
      if (selectedFile) {
        data.append('profile_image', selectedFile)
      }

      console.log(data)

  
      try {
        const response = await api.post("/update", data);
  
        history.push('/profile')

      } catch (err) {
        console.log(err);
        alert("Erro ao atualizar, tente novamente");
      }
  }

  return (
    <div id="updateProfile-page">

        <div className="updateProfile-content">
            <div className="updateProfile-header">
                <Link to="/profile">
                    <IoIosArrowRoundBack className="login-backButton" size="50" color="#f4f4f4" />
                </Link>
                <p className="register-text">Vamos atualizar algumas coisas.</p>
            </div>
            <div className="updateProfile-form">
            
                <form  
                  onSubmit={handleSubmit} 
                  autoComplete="off"
                >

                  <div className="dropzone-content">
                    <Dropzone onFileUploaded={setSelectedFile} />
                  </div>

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
                      <span>Título</span>
                      <input 
                          type="text" 
                          name="headline" 
                          id="headline" 
                          placeholder="Digite sua função"
                          onChange={e => setHeadline(e.target.value)}
                      />
                  </div>

                  <div className="registerForm-field">
                      <span>Biografia</span>
                      <textarea  
                          name="description" 
                          id="description" 
                          placeholder="Conte-nos um pouco mais sobre você"
                          onChange={e => setDescription(e.target.value)}
                      />
                  </div>

                  <div className="registerForm-field">
                      <span>Linkedin</span>
                      <input 
                          type="text" 
                          name="linkedin" 
                          id="linkedin" 
                          placeholder="Coloque o link do seu perfil do Linkedin"
                          onChange={e => setLinkedin(e.target.value)}
                      />
                  </div>

                  <div className="registerForm-field">
                      <span>Github</span>
                      <input 
                          type="text" 
                          name="github" 
                          id="github" 
                          placeholder="Coloque o link do seu perfil do Github"
                          onChange={e => setGithub(e.target.value)}
                      />
                  </div>

                  <div className="registerForm-field">
                      <span>Instagram</span>
                      <input 
                          type="text" 
                          name="instagram" 
                          id="instagram" 
                          placeholder="Coloque o link do seu perfil do Instagram"
                          onChange={e => setInstagram(e.target.value)}
                      />
                  </div>

                  <div className="registerForm-field">
                      <span>Senha</span>
                      <input 
                          type="password" 
                          name="password"
                          id="password" 
                          placeholder="Confirme sua senha"
                          onChange={e => setPassword(e.target.value)}
                      />
                  </div>

                  <div className="form-submitButton">
                      <button type="submit">
                        <p>Salvar</p>
                        <FiSave size="23" color="#f4f4f4" />
                      </button>
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default updateProfile