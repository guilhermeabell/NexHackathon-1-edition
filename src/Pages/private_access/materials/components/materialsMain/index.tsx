import React from 'react'
import { Link } from 'react-router-dom'

import thumbMat from '../../../../../assets/images/Thumb.png'

import './styles.css'

const MaterialsPage = () => {
    return (
      <>
      <p className="category-title">Programação</p>
      <div className="materials-main">

        <Link 
          to={{ pathname: 'https://www.youtube.com/watch?v=_tTc3rH_Olk&t=20s'}} 
          target="_blank" 
        >
        <div className="materials-item-container">
            <img className="materials-item-image" src={thumbMat} />

            <p className="materials-item-title">Como criar sua primeira API com...</p>
        </div>
        </Link>

        <div className="materials-item-container">
            <img className="materials-item-image" src={thumbMat} />

            <p className="materials-item-title">Como criar sua primeira API com...</p>
        </div>

        <div className="materials-item-container">
            <img className="materials-item-image" src={thumbMat} />

            <p className="materials-item-title">Como criar sua primeira API com...</p>
        </div>

        <div className="materials-item-container">
            <img className="materials-item-image" src={thumbMat} />

            <p className="materials-item-title">Como criar sua primeira API com...</p>
        </div>

        <div className="materials-item-container">
            <img className="materials-item-image" src={thumbMat} />

            <p className="materials-item-title">Como criar sua primeira API com...</p>
        </div>

        <div className="materials-item-container">
            <img className="materials-item-image" src={thumbMat} />

            <p className="materials-item-title">Como criar sua primeira API com...</p>
        </div>

        <div className="materials-item-container">
            <img className="materials-item-image" src={thumbMat} />

            <p className="materials-item-title">Como criar sua primeira API com...</p>
        </div>

        <div className="materials-item-container">
            <img className="materials-item-image" src={thumbMat} />

            <p className="materials-item-title">Como criar sua primeira API com...</p>
        </div>

      </div>
      </>
    )
}

export default MaterialsPage