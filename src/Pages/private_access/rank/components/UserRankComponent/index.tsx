import React from 'react'

import './styles.css'

import DefaultImage from '../../../../../assets/images/defaultProfile.svg'

interface UserRankProps {
  name: string,
  profile_image: string,
  points: number,
}

const UserRank: React.FC<UserRankProps> = (props) => {
  return(
    <div className="rankPrivate-userRank">
      <div className="rankPrivate-userRank-content">
          <div className="user-rank-info">
            <div className="me-img-content">
              <img src={`${(props.profile_image == null ? DefaultImage : `http://3.228.101.223:3333/uploads/${props.profile_image}`)}`} />  
            </div>
            <div className="user-rank-title">
              <p>{props.name}</p>
              <p className="user-rank-points"><b>{props.points}</b> pontos</p>
            </div>
          </div> 

          <div className="rankPrivate-line" ></div>   

      </div> 
    </div>
  )
}

export default UserRank