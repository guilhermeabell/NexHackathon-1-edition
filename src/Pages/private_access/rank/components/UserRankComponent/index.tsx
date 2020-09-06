import React from 'react'

import './styles.css'

interface UserRankProps {
    image: string;
    description: {
        title: string;
        category: string;
    },
    score: string;
}

const UserRank: React.FC<UserRankProps> = ({ image, description, score }) => {
  return(
    <div className="rankPrivate-userRank">
      <div className="rankPrivate-userRank-content">
          <div className="user-rank-info">
            <img src={image} alt="Crown rank"/>   
            <div className="user-rank-title">
              <p dangerouslySetInnerHTML={{__html: description.title}}></p>
              <p dangerouslySetInnerHTML={{__html: description.category}}></p>
            </div>
          </div>   
        <div className="user-rank-points"> 
          <p dangerouslySetInnerHTML={{__html: score }}></p>
          <p>Pontos</p>
        </div>
      </div>    
    </div>
  )
}

export default UserRank