import React from 'react'

import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'
import MainSection from './components/MainSection/index'
import ShortcutSection from './components/ShortcutSection/index'

const PrivateHomePage = () => {
    return (
        <div id="homePrivate-page">
            <div className="homePrivate-content">
                <HeaderComponent />

                <MainSection />

                <ShortcutSection />
            </div>
        </div>
    )
}

export default PrivateHomePage