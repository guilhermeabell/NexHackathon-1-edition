import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './styles.css'

const MaterialsPage = () => {
    return (
      <div className="spotlight" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://i.imgur.com/nRj4xUw.jpeg)`
      }}>
        <div className="spotlight-main">
          <div className="spotlight-info">
              <div className="spotlight-title">O NexHackathon está no final!</div>
              <div className="spotlight-description">Confira os resultados no dia 18/12 ao vivo no Youtube, ja reserve sua agenda.</div>
              <Link 
                to={{ pathname: 'https://www.youtube.com/channel/UCr5AwkfebU9WdrKzQ95zZqA'}} 
                target="_blank" 
              >
                <div className="spotlight-button">
                    <FaPlay size="1rem" color="#020E17" />
                    <p>Em breve</p>
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