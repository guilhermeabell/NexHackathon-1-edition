import React from 'react'
import ProfileImg from '../../../../../assets/images/profileImg.jpg'
import './styles.css'


const UserSectionComponent = () => {
    return (
        <div className="rankPrivate-user">
            <div className="rankPrivate-user-content">
                <div className="user-section-img">
                  <img src={ProfileImg}></img>
                  <div className="user-green-dot"></div>
                </div>
                <div className="user-section-title">
                  <p className="user-title" >Eai Pedro,</p>
                  <p className="user-title" >Vamos conferir sua pontuação?</p>
                </div>
            </div>
        </div>
    )
}

export default UserSectionComponent