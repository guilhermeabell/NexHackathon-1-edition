import React from 'react'
import { Link } from 'react-router-dom'

import RankingImg from '../../assets/shotcutIcons/ranking.svg'
import GroupImg from '../../assets/shotcutIcons/group.svg'
import ProfileImg from '../../assets/shotcutIcons/profile.svg'
import MaterialsImg from '../../assets/shotcutIcons/materials.svg'

import './styles.css'

const MainShortcutComponent = () => {
    return (
        <div className="homePrivate-shortcuts">
            <div className="homePrivate-shortcuts-content">
                <div className="shortcut-section-title">
                  <p className="shortcut-title" >Atalhos</p>
                </div>

                <div className="shortcuts-section">

                    <div className="shortcut-item-container">
                        <Link to="/rank" className="shortcut-item">
                                <img className="shortcut-item-image" src={RankingImg} />

                                <p className="shortcut-item-title">Comunidade</p>
                        </Link>
                    </div>

                    <div className="shortcut-item-container">
                        <Link to="/rank" className="shortcut-item">
                                <img className="shortcut-item-image" src={MaterialsImg} />

                                <p className="shortcut-item-title">Materiais</p>
                        </Link>
                    </div>

                    <div className="shortcut-item-container">
                        <Link to="/rank" className="shortcut-item">
                                <img className="shortcut-item-image" src={ProfileImg} />

                                <p className="shortcut-item-title">Perfil</p>
                        </Link>
                    </div>

                    <div className="shortcut-item-container">
                        <Link to="/rank" className="shortcut-item">
                                <img className="shortcut-item-image" src={GroupImg} />

                                <p className="shortcut-item-title">Grupos</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainShortcutComponent