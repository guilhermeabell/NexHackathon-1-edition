import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import rankIcon from '../rank/assets/crownRank.svg'
import api from '../../../services/api'

import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'
import UserRank from '../rank/components/UserRankComponent'
import UserRankList from './components/UserRankList'

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

interface Rank {
    name: string,
    profile_image: string,
    points: number,
}

const PrivateRankPage = () => {

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
        <div id="rankPrivate-page">
            <div className="rankPrivate-content" > 
                <HeaderComponent />
            </div>

            <UserRank 
                profile_image={user.profile_image} 
                points={user.points}
                name={user.name}
            />
            <div className="rank-text-info">                
                <p>Para aumentar sua pontuação participe das atividades!</p>
                <hr />       
            </div>

            <UserRankList 
                name={user.name}
            />
            
        </div>
    )
}

export default PrivateRankPage