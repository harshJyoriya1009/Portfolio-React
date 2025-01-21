import React from 'react'
import './Projects.css'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jpg'
import project5 from '../../assets/project5.jpg'

const Projects = () => {
  return (
    <>
    <div className="projects">
        <div className="project-title">
            <h1>My Projects</h1>
        </div>
        <div className="projectList">
                <div className="workList">
                    <div className="work">
                        <img src={project1}/>
                        <div className="info">
                            <h3>NEWSHUB-APP</h3>
                           
                        </div>
                    </div>

                    <div className="work">
                        <img src={project2}/>
                        <div className="info">
                            <h3>PASSWORD MAKER</h3>
                        </div>
                    </div>

                    <div className="work">
                        <img src={project3}/>
                        <div className="info">
                            <h3>NETFLIX CLONE</h3>
                        </div>
                    </div>

                    <div className="work">
                        <img src={project4}/>
                        <div className="info">
                            <h3>WORD CONVERTER-APP</h3>
                        </div>
                    </div>
                    
                    <div className="work">
                        <img src={project5}/>
                        <div className="info">
                            <h3>NOTEPAD-APP</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="showmore">More<i class="fa-solid fa-share"></i></div>
            
    </div>

    </>
  )
}

export default Projects
