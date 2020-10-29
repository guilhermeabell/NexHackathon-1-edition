import React from 'react'

// Logos
import VicenteLeporace from '../../assets/Home/patnersLogos/VicenteLeporace.svg'
import ETECUirapuru from '../../assets/Home/patnersLogos/LogoUirapuru.svg'
import Tivit from '../../assets/Home/patnersLogos/LogoTIVIT.svg'
import Tecnisa from '../../assets/Home/patnersLogos/LogoTECNISA.svg'


import './styles.css'

const AwardSectionComponent = () => {
    return (
        <div className="homePublic-section6">
            <div className="section6-content">
                
                <p className="section6-patners-title" >Escolas participantes</p>
                
                <div className="section6-patners-items">

                    <div className="section6-patners-item-first">
                        <img src={VicenteLeporace} />
                    </div>

                    <div className="section6-patners-item-first">
                        <img src={ETECUirapuru} />
                    </div>

                </div>

                <p className="section6-patners-title" >Parceiros</p>
                
                <div className="section6-patners-items">

                    <div className="section6-patners-item-first">
                        <img src={Tivit} />
                    </div>

                    <div className="section6-patners-item-first">
                        <img src={Tecnisa} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AwardSectionComponent