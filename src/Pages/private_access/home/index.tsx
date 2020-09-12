import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../../services/api'

import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'
import MainSection from './components/MainSection/index'
import ShortcutSection from './components/ShortcutSection/index'
import UserSection from './components/UserSection/index'

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


const PrivateHomePage = () => {

    const [user, setUser] = useState<User[]>([]);

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
            console.log(response.data)
            console.log(user)
          });
    }, [token, user]);

    return (
        <div id="homePrivate-page">
            <div className="homePrivate-content">
                <HeaderComponent />

                <UserSection 
                    name="pedro"
                />

                <MainSection />

                <ShortcutSection />
            </div>
        </div>
    )
}

export default PrivateHomePage