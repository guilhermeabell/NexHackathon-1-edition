import React from 'react'
import { Link } from 'react-router-dom'

import { FaPen } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'

import './styles.css'

const BioComponent = () => {
    return (
        <div className="profilePrivate-bio">
          <div className="profilePrivate-bio-content">
              <div className="bio-title">
                <p>Sobre mim</p>
                <FaPen size="15" color="#b7b7b7" />
              </div>

              <div className="profilePrivate-bio-description">
                 <p>Pedro é um jovem apaixonado por programação, atualmente atuando como desenvolvedor FullStack. Cursando Redes de Computadores em 2020. JavaScript. </p>
              </div>                

              <div className="linksContact-bio">
                <div className="link-bio-item">
                  <GrLinkedinOption size="25" color="#f4f4f4" />
                  <p>Linkedin</p>
                </div>

                <div className="link-bio-item">
                  <AiFillGithub size="30" color="#f4f4f4" />
                  <p>Github</p>
                </div>

                <div className="link-bio-item">
                  <GrInstagram size="25" color="#f4f4f4" />
                  <p>Instagram</p>
                </div>
              </div>
          </div>
        </div>
    )
}

export default BioComponent