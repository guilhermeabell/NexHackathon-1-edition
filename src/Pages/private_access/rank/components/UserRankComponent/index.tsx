import React from 'react'

import rankIcon from '../../assets/crownRank.svg'
import './styles.css'

const UserRank: React.FC = () => {
  return(
    <section className="container-user-rank">
      <div className="user-rank-icon">
        <img src={rankIcon} alt="Crown rank"/>      
      </div>
      <div className="user-rank-info">
        <span>
          <p>Uau</p>
          <p>Você bla bla bla <strong>1</strong> bla bla bla</p>
        </span>
        <span>
          <p><strong>3800</strong></p>
          <p>pontos</p>
        </span>
      </div>
    </section>
  )
}

export default UserRank
