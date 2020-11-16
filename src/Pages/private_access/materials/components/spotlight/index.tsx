import React from 'react'
import { FaPlay } from 'react-icons/fa'

import './styles.css'

const MaterialsPage = () => {
    return (
      <div className="spotlight" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://i.imgur.com/ASa8vgJ.png)`
      }}>
        <div className="spotlight-main">
          <div className="spotlight-info">
              <div className="spotlight-title">Em breve nossas lives estarão aqui!</div>
              <div className="spotlight-description">Assista  as nossas lives e fique por dentro de  tudo.</div>
              <div className="spotlight-button">
                  <FaPlay size="1rem" color="#020E17" />
                  <p>Assistir</p>
              </div>
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