import React from 'react'
import { Link } from 'react-router-dom'
import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'
import UserSectionComponent from './components/UserSectionComponent/index'

import UserRank from '../rank/components/UserRankComponent'

const PrivateRankPage = () => {
    return (
        <div id="rankPrivate-page">
            <div className="rankPrivate-content" > 
                <HeaderComponent />
                <UserSectionComponent />
            </div>

            <UserRank />
            <div>                
                <p></p>
                <span className="separator-rank"></span>
            </div>
        </div>
    )
}

export default PrivateRankPage