import React from 'react'
import './Projects.css'
import Project1img from '../../assests/images/PortfolioSS.png';
import Project2img from '../../assests/images/MYC.png';
import Project3img from '../../assests/images/ExpenseTracker.png';
import LightSpeed from 'react-reveal/LightSpeed';
const Projects = () => {
  return (
    <>
      <div className="container project" id='projects'>
      
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'> Recent Projects</h2>
        <hr />
        <p className='pb-3 text-center'>👉 Here are my top 3 recent projects in which I designed and implemented the frontend of my portfolio</p>
      </div>
      {/* card design */}
      <div className="row" id='ads'>
      <LightSpeed duration={1000} delay={200}>

        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img src={Project1img} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">HTML</span>
                    <span className="card-detail-badge">CSS</span>
                    <span className="card-detail-badge">BootStrap</span>
                    <span className="card-detail-badge">ReactJs</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title">
                        <h5 className='text-uppercase'>My Portfolio Project</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img src={Project2img} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">React Js</span>
                    <span className="card-detail-badge">MongoDB</span>
                    <span className="card-detail-badge">ExpressJs</span>
                    <span className="card-detail-badge">NodeJs</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title">
                        <h5 className='text-uppercase'>Make Your Choice</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Full stack</span>
                    <img src={Project3img} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">MongoDB</span>
                    <span className="card-detail-badge">ExpressJS</span>
                    <span className="card-detail-badge">NodeJS</span>
                    <span className="card-detail-badge">ReactJs</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title">
                        <h5 className='text-uppercase'>Expanse Tracker Project</h5>
                    </div>
                </div>
            </div>
        </div>
        </LightSpeed>
      </div>
    </>
  )
}

export default Projects
