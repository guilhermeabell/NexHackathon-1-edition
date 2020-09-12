import React from 'react'

import ProfileImg from '../../../../../assets/images/profileImg.jpg'

import './styles.css'

var data = new Date();
var hour = data.getHours();

interface UserSectionProps {
  name: string;
}

const UserSectionComponent : React.FC<UserSectionProps> = (props) => {
    return (
        <div className="homePrivate-user">
            <div className="homePrivate-user-content">
                <div className="user-section-img">
                  <img src={ProfileImg}></img>
                  <div className="user-green-dot"></div>
                </div>
                <div className="user-section-title">
                  <p className="user-title" >Olá {props.name},</p>
                  <p className="user-title" >tenha {`${(hour <= 12 ? 'um bom dia!' : hour <= 17 ? 'uma boa tarde!' : 'uma boa noite!')}`}</p>
                </div>
            </div>
        </div>
    )
}

export default UserSectionComponent