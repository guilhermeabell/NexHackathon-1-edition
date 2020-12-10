import React from 'react'
import { Link } from 'react-router-dom'

import HeaderComponent from '../../../Components/HeaderPrivateComponent'
import Spotlight from './components/spotlight/index'

import './styles.css'

var design = [
    {
        id: 1,
        link: "https://www.youtube.com/embed/vg-INqhKD5c",
        title: "Tutorial Completo de FIGMA - Ferramenta GRÁTIS para Design de Interfaces"
    },
    {
        id: 2,
        link: "https://www.youtube.com/embed/o2rFNZYNY8Y",
        title: "FIGMA MATERIAL DESIGN TUTORIAL - PORTUGÊS"
    },
    {
        id: 3,
        link: "https://www.youtube.com/embed/Yr5ocuLbV3s",
        title: "Google Web Designer - Conhecendo o aplicativo e realizando o primeiro projeto"
    },
    {
        id: 4,
        link: "https://www.youtube.com/embed/O3okqgda69c", 
        title: "COMO FAZER LOGO / PERFIL ESTILO DRASTIOM - PHOTOSHOP"
    },
    {
        id: 5,
        link: "https://www.youtube.com/embed/Tt8f9jdUZF0",
        title: "Como fazer um Logotipo pelo Celular Grátis"
    },
    {
        id: 6,
        link: "https://www.youtube.com/embed/22q8i2z5PSk",
        title: "Vença o bloqueio criativo na hora de criar um logotipo."
    },
]

var business = [
    {
        id: 1,
        link: "https://www.youtube.com/embed/pS6atZtjJzM",
        title: "Como vender suas ideias"
    },
    {
        id: 2,
        link: "https://www.youtube.com/embed/-asX891uduA",
        title: "Pitch - Como vender sua idéia | Faça diferente! Luciano Döll"
    },
    {
        id: 3,
        link: "https://www.youtube.com/embed/dZcP3izH80Q",
        title: "Google Web Designer - Conhecendo o aplicativo e realizando o primeiro projeto"
    },
    {
        id: 4,
        link: "https://www.youtube.com/embed/O3okqgda69c", 
        title: "COMO VENDER IDEIAS DE PROJETOS - OZI VLOG #303"
    }
]

var marketing = [
    {
        id: 1,
        link: "https://www.youtube.com/embed/nFsbgDLgjC4",
        title: "Baixar e Instalar editor de vídeo Shotcut para computador ATUALIZADO"
    },
    {
        id: 2,
        link: "https://www.youtube.com/embed/5_oDOWl7tmI",
        title: "Como Instalar Shotcut no PC, o Editor de Vídeos"
    },
    {
        id: 3,
        link: "https://www.youtube.com/embed/x-Q5wO5_IJQ",
        title: "O Melhor Editor de Vídeo GRÁTIS para Celular - Sem Marca d'água"
    },
    {
        id: 4,
        link: "https://www.youtube.com/embed/JC34mC3NdHs", 
        title: "Como Fazer um Pitch de Excelência | Na Prática e Exame"
    },
    {
        id: 5,
        link: "https://www.youtube.com/embed/pg6Kjxn_rA0", 
        title: "Pitch: como apresentar sua ideia"
    }
]

var lives = [
    {
        id: 1,
        link: "https://www.youtube.com/embed/ssB2x4nPuY8",
        title: "Hacka NEX: Esquenta"
    },
    {
        id: 2,
        link: "https://www.youtube.com/embed/SfH8Zqoh6GE",
        title: "Hacka NEX: O Nexplay"
    }
]

const MaterialsPage = () => {
    return (
        <div id="materials-page">
            <div className="materials-content">
                <HeaderComponent />

                <Spotlight />

                <div className="tutorials-media">
                    <p className="category-title">Nossas Lives</p>
                    <div className="materials-main">
                        {lives.map((video, index) => (
                            <div className="materials-item-container" key={video.id} >
                                <iframe className="lives-frames" src={video.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <p className="materials-item-title">{video.title}</p>
                            </div>
                        ))}
                    </div>

                    <p className="category-title">Design</p>
                    <div className="materials-main">
                        {design.map((video, index) => (
                            <div className="materials-item-container" key={video.id} >
                                <iframe src={video.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <p className="materials-item-title">{video.title}</p>
                            </div>
                        ))}
                    </div>

                    <p className="category-title">Business</p>
                    <div className="materials-main">
                        {business.map((video, index) => (
                            <div className="materials-item-container" key={video.id} >
                                <iframe src={video.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                <p className="materials-item-title">{video.title}</p>
                            </div>
                        ))}
                    </div>

                    <p className="category-title">Marketing</p>
                    <div className="materials-main">
                        {marketing.map((video, index) => (
                            <div className="materials-item-container" key={video.id} >
                                <iframe src={video.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

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