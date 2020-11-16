import React from 'react'
import { Link } from 'react-router-dom'

import thumbMat from '../../../../../assets/images/Thumb.png'

import './styles.css'

interface Props {
    category: string;
    video: {
        link: string;
        title: string;
    }
}

const MaterialsPage: React.FC<Props> = (props) => {
    return (
      <>
      <p className="category-title">Unknown</p>
      <div className="materials-main">
        <div className="materials-item-container" key={props.video.link} >
            <iframe src="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            <p className="materials-item-title">Unknown</p>
        </div>
      </div>
      </>
    )
}

export default MaterialsPage