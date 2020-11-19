import React, { useEffect, useState } from 'react'

import api from '../../../../../services/api'

import DefaultImage from '../../../../../assets/images/defaultProfile.svg'


import './styles.css'

interface Rank {
    id: number,
    email: string,
    name: string,
    profile_image: string,
    image_url
    points: number,
}

interface UserRankListProps {
  email: string,
  name: string,
}

const UserRankList: React.FC<UserRankListProps> = (props) => {

  const [rank, setRank] = useState<Rank[]>([])

    useEffect(() => {
        api.get('/rank').then((response) => {
            if (response && response.data) {
              console.log(response.data)
                setRank(response.data)
            }
        })
    })

    return(
      <div className="user-rankList-container">
          <div className="user-rankList-content">
          {rank.map((member, index) => (
            <div className={`${(member.email === props.email ? 'user-rankList-users-equal' : 'user-rankList-users')}`} key={member.email}>
              <div className={`${(member.email === props.email ? 'user-rankList-usersInfo-equal' : 'user-rankList-usersInfo')}`}> 
                <img src={`${(member.profile_image == null ? DefaultImage : `http://3.228.101.223:3333/uploads/${member.profile_image}`)}`} /> 
                <div className="user-rank-title">
                  <p>{member.name}</p>
                  <b>{`${(member.points >= 2000 ? 'Mestre' : member.points >= 1000 ? 'Veterano' : 'Calouro')}`}</b>
                </div>
              </div>

              <div className={`${(member.email === props.email ? 'user-rankList-points-equal' : 'user-rankList-points')}`}> 
                <b>{member.points}</b>
                <p>Pontos</p>
              </div>
            </div>
          ))}
          </div>
      </div>
    )
}

export default UserRankList;