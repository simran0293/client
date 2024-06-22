import React,{useState} from 'react'
import Home from '../../pages/Home/Home'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import './layout.css';
import Menus from '../Menus/Menus';
const Layout = () => {
    //usestate hook for toggling the menu
    const [toggle,setToggle]=useState(true);
    //change toggle function
    const handleToggle=()=>{
        setToggle(!toggle);
    }
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle?"sidebar-toggle sidebar":"sidebar"}>
            <div className="sidebar-toggle-items">
                {/* passing the toggle state as a prop to menu */}
                <p onClick={handleToggle}>
                    {
                       toggle?(<MdKeyboardDoubleArrowLeft size={30} color='white'/> ):(<MdKeyboardDoubleArrowRight size={30} color='white' />)
                    }
                   
                </p>
            </div>
            <Menus toggle={toggle}/>

        </div>
        <div className='container' >
            <Home/>
        </div>
      </div>
    </>
  )
}

export default Layout
