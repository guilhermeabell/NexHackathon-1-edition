import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../../services/api'

import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'
import MeComponent from './components/MeComponent/index'
import SkillsComponent from './components/SkillsComponent/index'
import BioComponent from './components/BioComponent/index'

import './styles.css'

interface User {
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

const ProfilePrivate = () => {

    const [user, setUser] = useState<User>({} as User);

    const token = localStorage.getItem("Auth")

    const history = useHistory()

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
          }).catch(err => {
            history.push('/login')
          });
    }, [token, user, history]);

    return (
        <div className="profilePrivate-page">
            <div className="profilePrivate-content">
                <HeaderComponent />
                
                <MeComponent
                    profile_image={user.profile_image}
                    name={user.name}
                    headline={user.headline}
                    email={user.email}
                    school={user.school}
                />

                <BioComponent 
                    name={user.name}
                    description={user.description}
                    linkedin={user.linkedin}
                    github={user.github}
                    instagram={user.instagram}
                />

            </div>
        </div>
    )
}

export default ProfilePrivate