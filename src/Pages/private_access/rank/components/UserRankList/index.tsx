import React from 'react';

import IgorImg from '../../../../../../src/assets/images/igorimg.jpg'
import KevelynImg from '../../../../../../src/assets/images/kevelynimg.jpg'
import PedroImg from '../../../../../../src/assets/images/defaultProfile.jpg'
import MarianneImg from '../../../../../../src/assets/images/mariimg.jpg'

import './styles.css';

const members = [
  {
    avatar: PedroImg,
    name: 'Pedro Augusto',
    score: 3800
  },
  {
    avatar: KevelynImg,
    name: 'Gabriela Kevelyn',
    score: 2500
  },
  {
    avatar: IgorImg,
    name: 'Igor Gonçalves',
    score: 1860
  },
  {
    avatar: MarianneImg,
    name: 'Marianne Alencar',
    score: 987
  },
  {
    avatar: PedroImg,
    name: 'Pedro Augusto',
    score: 3800
  },
  {
    avatar: KevelynImg,
    name: 'Gabriela Kevelyn',
    score: 2500
  },
  {
    avatar: IgorImg,
    name: 'Igor Gonçalves',
    score: 1860
  },
  {
    avatar: MarianneImg,
    name: 'Marianne Alencar',
    score: 987
  }
]

const UserRankList: React.FC = () => {
    return(
      <div className="user-rankList-container">
          <div className="user-rankList-content">
          {members.map((member, index) => (
            <div className="user-rankList-users">
              <div className="user-rankList-usersInfo">
                <img src={member.avatar} />   
                <div className="user-rank-title">
                  <p>{member.name}</p>
                  <b>{`${(member.score >= 2000 ? 'Mestre' : member.score >= 1000 ? 'Veterano' : 'Calouro')}`}</b>
                </div>
              </div>

              <div className="user-rankList-points"> 
                <b>{member.score}</b>
                <p>Pontos</p>
              </div>
            </div>
          ))}
          </div>
      </div>
    )
}

export default UserRankList;