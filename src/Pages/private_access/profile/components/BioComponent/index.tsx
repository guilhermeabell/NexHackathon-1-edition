import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillGithub } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'

import './styles.css'

interface UserBioProps {
  name: string
  description: string,
  linkedin: string,
  github: string,
  instagram: string
}

const BioComponent : React.FC<UserBioProps> = (props) => {

    return (
        <div className="profilePrivate-bio">
          
          <div className="profilePrivate-bio-content">
              <div className="bio-title">
                <p>Sobre mim</p>
              </div>

              <div className="profilePrivate-bio-description">
                <p>{`${(props.description == null ? `${props.name} é um ótimo participante e está nessa para aprender e compartilhar suas ideias incríveis. Seu forte é a vontade de aprender!` : props.description)}`}</p>
              </div>                

              <div className="linksContact-bio">
                <Link 
                  className={`${(props.linkedin == null || undefined ? 'handlelink-bio-false' : 'handlelink-bio')}`}
                  to={{ pathname: `${(props.linkedin == null || undefined ? 'https://www.linkedin.com' : props.linkedin)}` }} 
                  target="_blank" 
                >
                  <div className="link-bio-item">
                    <GrLinkedinOption size="25" color="#f4f4f4" />
                    <p>Linkedin</p>
                  </div>
                </Link>

                <Link 
                  className={`${(props.github == null || undefined ? 'handlelink-bio-false' : 'handlelink-bio')}`}
                  to={{ pathname: `${(props.github == null || undefined ? 'https://github.com/' : props.github)}` }} 
                  target="_blank" 
                >
                  <div className="link-bio-item">
                    <AiFillGithub size="30" color="#f4f4f4" />
                    <p>Github</p>
                  </div>
                </Link>

                <Link 
                  className={`${(props.instagram == null || undefined ? 'handlelink-bio-false' : 'handlelink-bio')}`}
                  to={{ pathname: `${(props.instagram == null || undefined ? 'https://instagram.com/' : props.instagram)}` }} 
                  target="_blank" 
                >
                  <div className="link-bio-item">
                    <GrInstagram size="25" color="#f4f4f4" />
                    <p>Instagram</p>
                  </div>
                </Link>
              </div>
          </div>
        </div>
    )
}

export default BioComponent