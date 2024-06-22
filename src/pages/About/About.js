import React from 'react'
import './About.css';
import Profile_photo from '../../assests/images/profile_photo.jpg'
import Zoom from 'react-reveal/Zoom';


const About = () => {
  return (
    <>
    <Zoom>
      <div className="about" id='about'>
        <div className="row">
            <div className="col-md-4 col-xl-4 col-lg-4 about_image">
            <img src={Profile_photo} alt="profile_pic" />

            </div>
            <div className="col-md-8 about_content">
                <div className='about_head'>About me</div>
                <div className='about_cont'>"Hello! I'm Simran, an enthusiastic engineering student. I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results and have a keen interest in frontend development.Being a student, I'm always learning new things. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things."</div>
            </div>
        </div>
      </div>
      </Zoom>
    </>
  )
}

export default About
