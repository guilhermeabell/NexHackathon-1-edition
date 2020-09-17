import React from 'react'

import './styles.css'

import DefaultImage from '../../../../../assets/images/defaultProfile.jpg'

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
            <img src={`${(props.profile_image == null ? DefaultImage : props.profile_image)}`} />  
            <div className="user-rank-title">
              <p>{props.name} parece que você tem <b>{props.points}</b> pontos</p>
              <p>Vamos {`${(props.points === 0 ? 'subir' : 'subir ainda mais')}`} esse número?</p>
            </div>
          </div>   
      </div>    
    </div>
  )
}

export default UserRank