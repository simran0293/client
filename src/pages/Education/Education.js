import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <>
      <div className="container education" id='education'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education</h2>
        <hr />  
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="(2020 - 2024)"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B.tech (CS-AI)</h3>
    <h4 className="vertical-timeline-element-subtitle">ABES Institute of Technology, Gzb</h4>
    <p>
      Percentage : <b>79.4%</b>
    </p>
    
  </VerticalTimelineElement>  

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="(2019 - 2020)"
    iconStyle={{ background: '#138781', color: 'white' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">12<sup>th</sup></h3>
    <h4 className="vertical-timeline-element-subtitle">Ch.Chhabil Das Public School, Gzb</h4>
    <p style={{ color: 'black' }}>
    Percentage : <b>93.8%</b>
    </p>
  </VerticalTimelineElement>
   
    </VerticalTimeline>
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="(2017 - 2018)"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">10<sup>th</sup></h3>
    <h4 className="vertical-timeline-element-subtitle">Ch.Chhabil Das Public School, Gzb</h4>
    <p>
      Percentage : <b>89%</b>
    </p>
  </VerticalTimelineElement>  
    </VerticalTimeline>
    </div>
    </>
  )
}

export default Education
