import React, { useState, useEffect, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useAlert } from 'react-alert'

import HeaderComponent from '../../../Components/HeaderPrivateComponent/index'

import api from '../../../services/api'

import './styles.css'

const ChatPage = () => {

    return (
        <div id="chat-page">
            <div className="chat-content">
                <HeaderComponent />

                <div className="chat-text-info">                
                    <p>Entre no discord e descubra quem são os outros participantes!</p>
                    <hr /> 
                </div>
                <iframe src="https://discord.com/widget?id=770657433085018132&theme=dark" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
    )
}

export default ChatPage