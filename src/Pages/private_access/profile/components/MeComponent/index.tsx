import React from 'react'
import { Link } from 'react-router-dom'

import { FiMail } from 'react-icons/fi'
import { FaPen } from 'react-icons/fa'

import ProfileImg from '../../../../../assets/images/profileImg.jpg'

import './styles.css'

const MeComponent = () => {
    return (
        <div className="profilePrivate-me">
          <div className="profilePrivate-me-content">
              <div className="me-editicon">
                <FaPen size="15" color="#b7b7b7" />
              </div>

              <div className="profilePrivate-me-img">
                <div className="me-img-content">
                  <img src={ProfileImg} />
                </div>  
              </div>                

                <p className="me-username">Pedro Augusto</p>

              <div className="aboutContact-me">
                <p>Desenvolvedor | Vicente Leporace</p>

                <div className="aboutContact-email">
                  <FiMail size="20" color="#b7b7b7" />
                  <p>p.augusto.rib@gmail.com</p>
                </div>
              </div>
          </div>
        </div>
    )
}

export default MeComponent