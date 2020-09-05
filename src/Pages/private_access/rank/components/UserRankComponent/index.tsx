import React from 'react'

import rankIcon from '../../assets/crownRank.svg'
import './styles.css'

const UserRank: React.FC = () => {
  return(
    <div className="rankPrivate-userRank">
      <div className="rankPrivate-userRank-content">
          <div className="user-rank-info">
            <img src={rankIcon} alt="Crown rank"/>   
            <div className="user-rank-title">
              <p>Uau.</p>
              <p>Você está em <strong>1°</strong> no ranking geral!</p>
            </div>
          </div>   
        <div className="user-rank-points">
          <p><strong>3800</strong></p>
          <p>Pontos</p>
        </div>
      </div>    
    </div>
  )
}

export default UserRank
