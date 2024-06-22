import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './WorkExp.css'
import { HiBuildingOffice2 } from "react-icons/hi2";

const WorkExp = () => {
  return (
    <>
      <div className="container work" id='experience'>
        <div className="work-exp">
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'> Work Experience</h2>
        <hr />
        <VerticalTimeline lineColor='#1e1e2c'>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="Nov,2023 - present"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<HiBuildingOffice2 />}
  >
    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">IdeationX</h4>
    <p>
    (Crafted the user-friendly website design)
    </p>
  </VerticalTimelineElement>

        <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    date="Aug,2023 - Sep,2023"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<HiBuildingOffice2 />}
    >
    <h3 className="vertical-timeline-element-title">Java Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Oasis Infobyte</h4>
    <p style={{ color: 'black' }}>
    (Developed the console based mini-projects)
    </p>
  </VerticalTimelineElement>

        
        </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp
