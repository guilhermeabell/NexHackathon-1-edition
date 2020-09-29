import React from 'react'
import { Link } from 'react-router-dom'

import HeaderComponent from '../../../Components/HeaderPrivateComponent'
import Spotlight from './components/spotlight/index'
import MaterialsMain from './components/materialsMain/index'

import './styles.css'

const MaterialsPage = () => {
    return (
        <div id="materials-page">
            <div className="materials-content">
                <HeaderComponent />

                <Spotlight />

                <MaterialsMain />
                <MaterialsMain />
                <MaterialsMain />
                <MaterialsMain />
            </div>
        </div>
    )
}

export default MaterialsPage