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
    <section className="container-user-rank">
      <div className="user-rank-icon">
        <img src={image} alt="Crown rank"/>      
      </div>
      <div className="user-rank-info">
        <span>
          <p dangerouslySetInnerHTML={{__html: description.title}}></p>
          <p dangerouslySetInnerHTML={{__html: description.category}}></p>
        </span>
        <span>
          <p className="user-rank-score" dangerouslySetInnerHTML={{__html: score }}></p>
          <p>pontos</p>
        </span>
      </div>
    </section>
  )
}

export default UserRank
