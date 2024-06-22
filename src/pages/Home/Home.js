import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import './home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assests/docs/SimranResume.pdf.pdf'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import Fade from 'react-reveal/Fade';


const Home = () => {
  //destructuring
  const [theme,setTheme]=useTheme();
  //function to handle theme
  const handleTheme=()=>{
    setTheme((prevState)=>(prevState==='Light'? 'dark' : 'Light')
    );
  }
  return (
    <>
    <div className='container-fluid home-container' id='home'>
     <div className="theme-btn" onClick={handleTheme} >
        {theme === 'Light' ? (<BsFillMoonStarsFill size={20}/>):(<MdSunny size={20}/>)}
     </div>
     
     <div className='container home-content'>
        <Fade right duration={1000} delay={300}>
        <h1 >Hi👋 I am Simran</h1>
        <h4>I'm a </h4>
        <h2><Typewriter style={{ color: 'blue' }}
  options={{
    strings: ['Frontend Developer!', 'React Js Developer!','Programmer!'],
    autoStart: true,
    loop: true,
  }}
/></h2>
        </Fade>
      <Fade bottom duration={1000} delay={300}>
<div className="home-buttons">
  <a href="https://www.linkedin.com/in/simran-arora-1a8a34202" className='btn btn-hire' rel='noreferrer' target='_blank'>Hire me</a>
  {/* <button className='btn btn-hire'>Hire Me</button> */}
  <a className='btn btn-cv' href={Resume} target='_blank' rel='noopener noreferrer'>My Resume</a>
</div>
</Fade>  
     
      
     </div>
    </div>
    </>
  )
}

export default Home
