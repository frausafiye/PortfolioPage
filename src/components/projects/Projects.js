import React from 'react'
import Project from './Project'
import Project1Img from '../../images/bookshopper.png'
import Project2Img from '../../images/xox.png'
import Project3Img from '../../images/kita.jpg'
import './projects.css'


export default function Projects() {
  return (
    <section className="section projects" id='projects'>
      <div className="section-title">
        <h2>Projects</h2>
        <div className="underline"></div>
        <section className='section-center'>
        <p className="projects-text">
          Putting what I've learned into practice, learning more while applying, and letting challenges develop me. These were my goals in developing these projects.Click on them and browse my projects!
        </p>
        </section>
      </div>
      <div className="section-center projects-center">
        {/* //LINKLER */}
       <Project to='' src={Project1Img} title='BookShopper' tech='React,Redux' className="project-1"/>
       <Project to='https://frausafiye.github.io/XOX-Game-React/' src={Project2Img} title='XOX Game' tech='React' className="project-2"/>
       <Project to='https://github.com/ben-gee723/kitacare' src={Project3Img} title='Kitacare' tech='React and Mongodb' className="project-3"/>

      </div>
    </section>
  )}