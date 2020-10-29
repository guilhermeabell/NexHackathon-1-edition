import React, { useEffect, useState } from 'react'

import api from '../../../../../services/api'

import DefaultImage from '../../../../../assets/images/defaultProfile.jpg'


import './styles.css'

interface Rank {
    id: number,
    name: string,
    profile_image: string,
    points: number,
}

interface UserRankListProps {
  id: number,
  name: string,
}

const UserRankList: React.FC<UserRankListProps> = (props) => {

  const [rank, setRank] = useState<Rank[]>([])

    useEffect(() => {
        api.get('/rank').then((response) => {
            if (response && response.data) {
                setRank(response.data)
            }
        })
    })

    return(
      <div className="user-rankList-container">
          <div className="user-rankList-content">
          {rank.map((member, index) => (
            <div className={`${(member.id === props.id ? 'user-rankList-users-equal' : 'user-rankList-users')}`} key={member.id}>
              <div className={`${(member.id === props.id ? 'user-rankList-usersInfo-equal' : 'user-rankList-usersInfo')}`}> 
                <img src={`${(member.profile_image == null ? DefaultImage : member.profile_image)}`} /> 
                <div className="user-rank-title">
                  <p>{member.name}</p>
                  <b>{`${(member.points >= 2000 ? 'Mestre' : member.points >= 1000 ? 'Veterano' : 'Calouro')}`}</b>
                </div>
              </div>

              <div className={`${(member.id === props.id ? 'user-rankList-points-equal' : 'user-rankList-points')}`}> 
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