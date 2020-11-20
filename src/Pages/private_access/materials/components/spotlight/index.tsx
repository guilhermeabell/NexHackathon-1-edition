import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './styles.css'

const MaterialsPage = () => {
    return (
      <div className="spotlight" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://i.imgur.com/ynqyoR7.jpeg)`
      }}>
        <div className="spotlight-main">
          <div className="spotlight-info">
              <div className="spotlight-title">Live de Esquenta marcada para hoje!</div>
              <div className="spotlight-description">A live vai começar as 18:00, aproveite para tirar suas dúvidas.</div>
              <Link 
                to={{ pathname: 'https://www.youtube.com/watch?v=ssB2x4nPuY8'}} 
                target="_blank" 
              >
                <div className="spotlight-button">
                    <FaPlay size="1rem" color="#020E17" />
                    <p>Assistir</p>
                </div>
              </Link>
          </div>

          <div className="spotlight-title">
              <p className="title">Materiais de apoio</p>
              <p className="description">Veja os materiais de apoio que preparamos para você!</p>
          </div>
        </div>

      </div>
    )
}

export default MaterialsPage