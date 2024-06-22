import React,{useState} from 'react'
import { HiMenu } from "react-icons/hi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import './MobileNav.css'
import { FcHome,FcEngineering, FcCollaboration, FcAbout,FcReading, FcWorkflow , FcBusinessContact  } from "react-icons/fc";
import { Link} from 'react-scroll';


const MobileNav = () => {
   const[open,setOpen]=useState(false);
   //function to handle open or close the menu
   const handleOpen =()=>{
      setOpen(!open);
   }
   //function to close the meny list if we click any of the menu items
   const handleMenuClick = ()=>{
      setOpen(false);
   }

  
   

  return (
    <div className='mobile-nav'>
        <div className="mobile-nav-header">
         {open?(<AiOutlineMenuUnfold className='mobile-nav-icon' size={30} onClick={handleOpen}/> )
         :(<HiMenu className='mobile-nav-icon' size={30} onClick={handleOpen}/> )}

            <span className='mobile-nav-title'>My Portfolio</span>
            
        </div>
       
        {open && (
         <div className="mobile-nav-menu">
         <div className="nav-items">
         <div className="nav-item">
             <div className="nav-link">
                <Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcHome /> Home
                </Link>
             </div>
             <div className="nav-link">
                <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcAbout/> About
                </Link> 
             </div>
             <div className="nav-link">
                <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcReading/> Education
                </Link>
             </div>
             <div className="nav-link">
                <Link to='tech-stack' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcEngineering/> Tech Stack
                </Link>
             </div>
             <div className="nav-link">
                <Link to='projects' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcWorkflow /> Projects
                </Link>
             </div>
             <div className="nav-link">
                <Link to='experience' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcCollaboration/> Work Experience
                </Link>
                
             </div>
             <div className="nav-link">
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                <FcBusinessContact /> Contact
                </Link>
             </div>
             
         </div>
         </div>
       </div>
        )}
        
    </div>
  )
}

export default MobileNav
