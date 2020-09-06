import React from 'react';

import UserRank from '../UserRankComponent';

import IgorImg from '../../../../../../src/assets/images/igorimg.jpg'
import KevelynImg from '../../../../../../src/assets/images/kevelynimg.jpg'
import PedroImg from '../../../../../../src/assets/images/profileImg.jpg'
import MarianneImg from '../../../../../../src/assets/images/mariimg.jpg'

import './styles.css';

const members = [
  {
    avatar: PedroImg,
    name: '<strong>Pedro Augusto</strong>',
    category: 'mestre',
    score: '3800'
  },
  {
    avatar: KevelynImg,
    name: '<strong>Gabriela Kevelyn</strong>',
    category: 'mestre',
    score: '2500'
  },
  {
    avatar: IgorImg,
    name: '<strong>Igor Gonçalves</strong>',
    category: 'veterano',
    score: '1860'
  },
  {
    avatar: MarianneImg,
    name: '<strong>Marianne Alencar</strong>',
    category: 'calouro',
    score: '987'
  }
]

const UserRankList: React.FC = () => {
    return(
      <section className="user-rank-list-container">
        {members.map((member, index) => (
          <>
            <UserRank
              key={index}
              image={member.avatar} 
              description={{ title: member.name, category: member.category }}
              score={`<strong>${member.score}</strong>`}
            />
            <span className="separator-rank"></span>
          </>
        ))}
        
      </section>
    )
}

export default UserRankList;