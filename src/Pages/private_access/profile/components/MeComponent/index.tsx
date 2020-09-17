import React from 'react'

import { FiMail } from 'react-icons/fi'
import { FaPen } from 'react-icons/fa'

import DefaultImage from '../../../../../assets/images/defaultProfile.jpg'

import './styles.css'

interface UserMeProps {
  school: string
  profile_image: string
  name: string
  headline: string
  email: string
}

const MeComponent : React.FC<UserMeProps> = (props) => {
    return (
        <div className="profilePrivate-me">
          <div className="profilePrivate-me-content">
              <div className="me-editicon">
                <FaPen size="15" color="#b7b7b7" />
              </div>

              <div className="profilePrivate-me-img">
                <div className="me-img-content">
                  <img src={`${(props.profile_image == null ? DefaultImage : props.profile_image)}`} />
                </div>  
              </div>                

              <p className="me-username">{props.name}</p>

              <div className="aboutContact-me">
                <p>{`${(props.headline == null ? '' : `${props.headline} |` )}`} {props.school}</p>

                <div className="aboutContact-email">
                  <FiMail size="20" color="#b7b7b7" />
                  <p>{props.email}</p>
                </div>
              </div>
          </div>
        </div>
    )
}

export default MeComponent