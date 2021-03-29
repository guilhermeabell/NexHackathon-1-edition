import React from 'react'
import { Link } from 'react-router-dom'

import HeaderComponent from '../../../Components/HeaderPrivateComponent'
import Spotlight from './components/spotlight/index'

import './styles.css'

var lives = [
    {
        id: 1,
        link: "https://www.youtube.com/embed/7wgmqE2b-GU",
        title: "Aplicativo"
    },
    {
        id: 2,
        link: "https://www.youtube.com/embed/NikiN-i2kQg",
        title: "Equipe Saturn – Studium"
    },
    {
        id: 3,
        link: "https://www.youtube.com/embed/uCpqbH_c34s",
        title: "Pitch - Plataforma Carrery"
    },
    {
        id: 4,
        link: "https://www.youtube.com/embed/lgdChZbVvDk",
        title: "Projeto Dados à Prova D'Água - Maratona Hacka Nex"
    },
    {
        id: 5,
        link: "https://www.youtube.com/embed/3K2iGLOySNI",
        title: "Creativising - Project NexHackathon"
    },
    {
        id: 6,
        link: "https://www.youtube.com/embed/f4JF5DBfqP0",
        title: "Young innovators - Project Nexhackathon"
    },
    {
        id: 7,
        link: "https://www.youtube.com/embed/ROdVirCWvZ4",
        title: "SEU - Secretaria de Educação Digital Unificada (HACKANEX)"
    }
]

const MaterialsPage = () => {
    return (
        <div id="materials-page">
            <div className="materials-content">
                {/* <HeaderComponent /> */}

                <Spotlight />

                <div className="tutorials-media">
                    <p className="category-title">Todos os projetos</p>
                    <div className="materials-main">
                        {lives.map((video, index) => (
                            <div className="materials-item-container" key={video.id} >
                                <iframe className="lives-frames" src={video.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <p className="materials-item-title">{video.title}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MaterialsPage