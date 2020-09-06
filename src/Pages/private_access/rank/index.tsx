import React from 'react'

import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'
import UserSectionComponent from './components/UserSectionComponent/index'

import rankIcon from '../rank/assets/crownRank.svg'

import UserRank from '../rank/components/UserRankComponent'
import UserRankList from './components/UserRankList'

import './styles.css'

const PrivateRankPage = () => {
    const description = {
        title: 'Uau.',
        category: `Você esta em <strong>1º</strong> lugar no ranking geral!`
    }
    return (
        <div id="rankPrivate-page">
            <div className="rankPrivate-content" > 
                <HeaderComponent />
                <UserSectionComponent />
            </div>

            <UserRank 
                image={rankIcon} 
                description={description}
                score={'<strong>3800</strong>'}
            />
            <div className="rank-text-info">                
                <p>Para aumentar sua pontuação participe das atividades!</p>
                <hr />       
            </div>

            <UserRankList />
            
        </div>
    )
}

export default PrivateRankPage