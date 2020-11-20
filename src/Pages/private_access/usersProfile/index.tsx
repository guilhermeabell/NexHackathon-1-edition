import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../../services/api'

import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'
import MeComponent from './components/MeComponent/index'
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

interface UserParams {
    id: string;
}

const ProfilePrivate = () => {

    const params = useParams<UserParams>()
    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        api.get(`/user/${params.id}`).then((response) => {
            if (response && response.data) {
              console.log(response.data)
                setUser(response.data)
            }
        })
    }, [params.id])

    console.log(params)

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