import React from 'react'
import './Menus.css';
import profile_photo from '../../assests/images/profile_photo.jpg';
import { FcHome,FcEngineering, FcCollaboration, FcAbout,FcReading, FcWorkflow , FcBusinessContact  } from "react-icons/fc";
import { Link} from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Zoom';

const Menus = ({toggle}) => {
  return (
    <>
    {toggle?(
        <>
        <Zoom>
        <div className="navbar-profile-pic">
        <img src={profile_photo} alt="profile pic" />
      </div>
        </Zoom>
         <Fade left duration={1000} delay={300}>
         <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
               <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
               <FcHome /> Home
               </Link>
            </div>
            <div className="nav-link">
               <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
               <FcAbout/> About
               </Link> 
            </div>
            <div className="nav-link">
               <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
               <FcReading/> Education
               </Link>
            </div>
            <div className="nav-link">
               <Link to='tech-stack' spy={true} smooth={true} offset={-100} duration={100}>
               <FcEngineering/> Tech Stack
               </Link>
            </div>
            <div className="nav-link">
               <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
               <FcWorkflow /> Projects
               </Link>
            </div>
            <div className="nav-link">
               <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} >
               <FcCollaboration/> Work Experience
               </Link>
               
            </div>
            <div className="nav-link">
               <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} >
               <FcBusinessContact /> Contact
               </Link>
              
            </div>
            
        </div>

      </div>
         </Fade>
      
      </>  
    ):
    (<>
    <div className="nav-items">
        <div className="nav-item">
        <div className="nav-link">
               <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
               <FcHome />
               </Link>
            </div>
            <div className="nav-link">
               <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
               <FcAbout/>
               </Link> 
            </div>
            <div className="nav-link">
               <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
               <FcReading/>
               </Link>
            </div>
            <div className="nav-link">
               <Link to='tech-stack' spy={true} smooth={true} offset={-100} duration={100}>
               <FcEngineering/>
               </Link>
            </div>
            <div className="nav-link">
               <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
               <FcWorkflow />
               </Link>
            </div>
            <div className="nav-link">
               <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} >
               <FcCollaboration/> 
               </Link>
               
            </div>
            <div className="nav-link">
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} >
               <FcBusinessContact />
               </Link>
            </div>
            
        </div>

      </div>
    </>)
}  
    
  </>)
}

export default Menus
