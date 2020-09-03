import React from 'react'

import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'
import MainSection from './components/MainSection/index'
import ShortcutSection from './components/ShortcutSection/index'
import UserSection from './components/UserSection/index'

const PrivateHomePage = () => {
    return (
        <div id="homePrivate-page">
            <div className="homePrivate-content">
                <HeaderComponent />

                <UserSection />

                <MainSection />

                <ShortcutSection />
            </div>
        </div>
    )
}

export default PrivateHomePage