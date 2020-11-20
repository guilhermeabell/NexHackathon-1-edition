import React from 'react'

// Icones da timeline
import Rocket from '../../assets/Home/timelineIcons/rocket.svg'
import Calendar from '../../assets/Home/timelineIcons/calendar.svg'
import Group from '../../assets/Home/timelineIcons/group.svg'
import Lamp from '../../assets/Home/timelineIcons/lamp.svg'
import Trophy from '../../assets/Home/timelineIcons/trophy.svg'

import './styles.css'

const timelineSpace = {
    marginLeft: "4vw",  // Max-92%
} as React.CSSProperties;

const data = new Date()
const formatData = ("0" + data.getDate()).substr(-2) + "/" 
+ ("0" + (data.getMonth() + 1)).substr(-2) + "/" + data.getFullYear()

var value = "37%"

const timelineStage = {
    width: `${value}`,  // Max-92%
 } as React.CSSProperties;


const TimeLineComponent = () => {
    return (
      <div className="homePublic-section3">
          <div className="section3-content">
              <p className="section3-title" >Nossa trajetória</p>

              <div className="section3-timeline">
                  <div className="section3-timeline-line" style={timelineStage} />
                  <div className="section3-timeline-dots">
                      <div className="section3-timeline-dot" />
                      <div className="section3-timeline-dot" />
                      <div className="section3-timeline-dot" />
                      <div className="section3-timeline-dot" />
                      <div className="section3-timeline-dot" />
                  </div>
                  <hr className="section3-line" />
              </div>

              <div className="section3-timeline-times">
                    <div className="section3-timeline-time">
                        <img src={Rocket} />
                        <p className="section3-timeline-desc" >Lançamento</p>
                    </div>
                    <div className="section3-timeline-time">
                        <img src={Calendar} />
                        <p className="section3-timeline-desc" >Inscrições</p>
                    </div>
                    <div className="section3-timeline-time" style={timelineSpace} >
                        <img src={Group} />
                        <p className="section3-timeline-desc" >Formações</p>
                    </div>
                    <div className="section3-timeline-time" style={timelineSpace} >
                        <img src={Lamp} />
                        <p className="section3-timeline-desc" >Desenvolvimento</p>
                    </div>
                    <div className="section3-timeline-time">
                        <img src={Trophy} />
                        <p className="section3-timeline-desc" >Resultado</p>
                    </div>
              </div>
          </div>
      </div>
    )
}

export default TimeLineComponent