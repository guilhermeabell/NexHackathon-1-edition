import React from 'react'
import { Link } from 'react-router-dom'

import { IoIosAddCircleOutline } from 'react-icons/io'
import { RiCloseLine } from 'react-icons/ri'

import './styles.css'

const SkillsComponent = () => {
    return (
        <div className="profilePrivate-skills">
          <div className="profilePrivate-skills-content">
              <div className="skills-header">
                <p className="skills-header-title">Minhas Habilidades</p>
                <IoIosAddCircleOutline size="30" color="#b7b7b7" />
              </div>               

              <div className="skills-main">
                <div className="skill-item">
                  <div className="skill-title">
                    <p>Programação</p>
                  </div>

                  <RiCloseLine size="20" color="#b7b7b7" />
                </div>

                <div className="skill-item">
                  <div className="skill-title">
                    <p>Comunicação</p>
                  </div>

                  <RiCloseLine size="20" color="#b7b7b7" />
                </div>

                <div className="skill-item">
                  <div className="skill-title">
                    <p>Desing</p>
                  </div>

                  <RiCloseLine size="20" color="#b7b7b7" />
                </div>

                <div className="skill-item">
                  <div className="skill-title">
                    <p>Criatividade</p>
                  </div>

                  <RiCloseLine size="20" color="#b7b7b7" />
                </div>
              </div>
          </div>
        </div>
    )
}

export default SkillsComponent