import React from 'react'

// Icons
import FirstPositionImg from '../../assets/Home/awardIllustrations/firstPosition.svg'
import SecondPositionImg from '../../assets/Home/awardIllustrations/secondPosition.svg'
import ThirdPositionImg from '../../assets/Home/awardIllustrations/thirdPosition.svg'


import './styles.css'

const AwardSectionComponent = () => {
    return (
        <div className="homePublic-section5">
            <div className="section5-content">
                
                <p className="section5-about-title" >Premiação</p>
                
                <div className="section5-award-items">

                    <div className="section5-award-item-first">
                        <img src={FirstPositionImg} />
                        <p className="section5-item-description">Os melhores projetos receberão prêmios incríveis no final do evento!</p>
                    </div>

                    <div className="section5-award-item-second">
                        <img src={SecondPositionImg} />

                    </div>

                    <div className="section5-award-item-third">
                        <img src={ThirdPositionImg} />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AwardSectionComponent