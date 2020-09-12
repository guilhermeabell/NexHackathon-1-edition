import React from 'react'

import './styles.css'

var data = new Date();
var hour = data.getHours();

interface UserSectionProps {
  name: string,
  profile_image: string,
}

const UserSectionComponent : React.FC<UserSectionProps> = (props) => {
    return (
        <div className="homePrivate-user">
            <div className="homePrivate-user-content">
                <div className="user-section-img">
                  <div className={`${(props.profile_image == null ? 'unknow-image' : 'image-true')}`} ></div>
                  <img src={props.profile_image} className={`${(props.profile_image == null ? 'no-image' : 'with-image')}`} />
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