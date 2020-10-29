import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import EditIcon from '../../assets/Home/aboutIcons/edit.svg'
import GroupIcon from '../../assets/Home/aboutIcons/group.svg'
import NetworkIcon from '../../assets/Home/aboutIcons/network.svg'
import RouteIcon from '../../assets/Home/aboutIcons/route.svg'

// Wave
import Wave from '../../assets/Home/waves/waveSection4.svg'


import './styles.css'

const AboutSectionComponent = () => {
    return (
        <>
        <img className="waveSection4" src={Wave} />

        <div className="homePublic-section4">
            <div className="section4-content">
                
                <p className="section4-about-title" >Como funciona?</p>
                <p className="section4-about-description" >Hackathon é um evento inovador, que reúne programadores, designers e outros profissionais ligados ao desenvolvimento de soluções em maratonas de trabalho com o objetivo de criar resoluções específicas para um ou vários desafios.</p>
                <p className="section4-about-subtitle">Siga os passos a seguir para participar da competição</p>

                <div className="section4-about-items">

                    <div className="section4-about-item">
                        <img src={EditIcon} />
                        <p className="section4-item-description">O primeiro passo para participar do nosso Hackathon é você se registrar, assim podemos ter acesso aos seus dados e saber se você é uma pessoa real, ao se inscrever você afirmar ter consentimento dos pais ou responsáveis para participar. Além de autorizar uso da sua imagem.</p>
                    </div>

                    <div className="section4-about-item">
                        <img src={GroupIcon} />
                        <p className="section4-item-description">Em seguida você deverá formar uma equipe auto organizável, com os participantes deste evento, você terá acesso a mentores da TIVIT, para te apoiar no desenvolvimento do seu projeto durante o evento.</p>
                    </div>

                    <div className="section4-about-item">
                        <img src={NetworkIcon} />
                        <p className="section4-item-description">Assim que feito seu cadastro você terá acesso a um servidor onde haverão vários outros participantes e a proposta é que você faça o network com essas pessoas, não tenha medo de se apresentar, esta etapa é muito importante!</p>
                    </div>

                    <div className="section4-about-item">
                        <img src={RouteIcon} />
                        <p className="section4-item-description">Com a sua equipe você ja poderá desenvolver uma solução para o problema proposto e entregá-la até a data definida para a avaliação. Assim você irá concluir um hackathon e concorrer as premiações.</p>
                    </div>

                </div>

                <div className="section4-about-button" >
                    <Link to="/register">
                        <button>
                            Inscreva-se
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutSectionComponent