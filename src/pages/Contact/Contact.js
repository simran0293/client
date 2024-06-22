import React from 'react'
import './Contact.css'
import { FaLinkedin,FaGithub, FaFacebook  } from "react-icons/fa";
import Rotate from 'react-reveal/Rotate';


const Contact = () => {
  return (
    <>
      <div className=" contact" id='contact'>
        <div className="card card0 border-0">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col sm-12 d-flex align-items-center">
                    <div className="card1">
                        <div className="row border-line">
                            <img src="https://i.pinimg.com/1200x/4a/fd/58/4afd58c2c1a981ab82dd3bc7b39ba1bb.jpg" alt="connect" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <Rotate>

                  
                  <div className="row contactbox">
                  <div className="card2 d-flex card border-8 px-4 py-5">
                    <div className="row">
                    <h6>Contact with 
                    <FaLinkedin color='blue' size={30} className='ms-2'/>
                    <FaGithub color='black' size={30} className='ms-2'/>
                    <FaFacebook color='blue' size={30} className='ms-2'/>

                    </h6>
                    </div>
                  
                  <div className="row px-3 mb-4">
                    <div className="line"></div>
                      <small className="or text-center">OR</small>
                      <div className="line"></div>
                  </div>
                  <div className="row px-3"> 
                      <input type="text" name="name" placeholder='Enter your name' className='mb-3'/>
                  </div>  
                  <div className="row px-3"> 
                      <input type="text" name="email" placeholder='Enter your Email Address' className='mb-3'/>
                  </div> 
                  <div className="row px-3"> 
                      <textarea type="text" name="msg" placeholder='Write your message' className='mb-3'/>
                  </div> 
                  <div className="row px-3"> 
                    <button className='button' type='submit'>SEND MESSAGE</button>
                  </div> 
                  </div>
                  
                </div>
                </Rotate>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
