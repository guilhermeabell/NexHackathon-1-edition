/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { FiSave } from 'react-icons/fi'
import api from '../../../services/api'

import Dropzone from '../../../Components/Dropzone/index'

import './styles.css'

interface User {
  id: number,
  name: string,
  school: string,
  email: string,
  profile_image: string,
  headline: string,
  description: string,
  points: number,
  linkedin: string,
  github: string,
  instagram: string
}

const updateProfile = () => {

  const [user, setUser] = useState<User>({} as User);

  const [selectedFile, setSelectedFile] = useState<File>();
  const [headline, setHeadline] = useState("")
  const [description, setDescription] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [github, setGithub] = useState("")
  const [instagram, setInstagram] = useState("")

  const token = localStorage.getItem("Auth")

    const history = useHistory()
    const customAlert = useAlert()

    if (!token) {
        history.push('/login')
  }

  useEffect(() => {
    api.get(`/user`,{
        headers: {
            Authorization: token,
        }
    }).then(response => {  
        setUser(response.data);
        
      }).catch(err => {
        history.push('/login')
      });
  }, [token, user, history]);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData()

    data.append('headline', headline)
    data.append('description', description)
    data.append('linkedin', linkedin)
    data.append('github', github)
    data.append('instagram', instagram)
    if (selectedFile) {
      data.append('profile_image', selectedFile)
    }

    var userID = user.id

    if (userID) { 
      try {
        const response = await api.post(`/update/${userID}`, data)
        history.push('/login')

      } catch (err) {
        console.log(err);
        alert("Erro ao atualizar, tente novamente");
      }
    }else{
      customAlert.error('Algo deu errado.')
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

            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.profile_image}</p>
            <p>{user.name}</p>
            
            <div className="updateProfile-form">
            
                <form  
                  onSubmit={handleSubmit} 
                  autoComplete="off"
                >

                  <div className="dropzone-content">
                    <Dropzone onFileUploaded={setSelectedFile} />
                  </div>

                  <div className="updateForm-field">
                      <span>Título</span>
                      <input 
                          type="text" 
                          name="headline" 
                          id="headline" 
                          placeholder="Digite sua função"
                          onChange={e => setHeadline(e.target.value)}
                          defaultValue={user.headline}
                      />
                  </div>

                  <div className="updateForm-field">
                      <span>Biografia</span>
                      <textarea  
                          name="description" 
                          id="description" 
                          placeholder="Conte-nos um pouco mais sobre você"
                          onChange={e => setDescription(e.target.value)}
                          defaultValue={user.description}
                      />
                  </div>

                  <div className="updateForm-field">
                      <span>Linkedin</span>
                      <input 
                          type="text" 
                          name="linkedin" 
                          id="linkedin" 
                          placeholder="Coloque o link do seu perfil do Linkedin"
                          onChange={e => setLinkedin(e.target.value)}
                          defaultValue={user.linkedin}
                      />
                  </div>

                  <div className="updateForm-field">
                      <span>Github</span>
                      <input 
                          type="text" 
                          name="github" 
                          id="github" 
                          placeholder="Coloque o link do seu perfil do Github"
                          onChange={e => setGithub(e.target.value)}
                          defaultValue={user.github}
                      />
                  </div>

                  <div className="updateForm-field">
                      <span>Instagram</span>
                      <input 
                          type="text" 
                          name="instagram" 
                          id="instagram" 
                          placeholder="Coloque o link do seu perfil do Instagram"
                          onChange={e => setInstagram(e.target.value)}
                          defaultValue={user.instagram}
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