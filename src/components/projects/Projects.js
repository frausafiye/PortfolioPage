import React from 'react'
import Project from './Project'
import Project1Img from '../../images/project-1.jpeg'
import Project2Img from '../../images/project-2.jpeg'
import Project3Img from '../../images/project-3.jpeg'
import Project4Img from '../../images/project-4.jpeg'
import './projects.css'


export default function Projects() {
  return (
    <section className="section projects" id='projects'>
      <div className="section-title">
        <h2>Projects</h2>
        <div className="underline"></div>
        <section className='section-center'>
        <p className="projects-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
          magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae
          dignissimos aliquid blanditiis architecto voluptates delectus
          voluptate animi nulla! Autem explicabo perspiciatis officia ea.
        </p>
        </section>
      </div>
      <div className="section-center projects-center">
          {/* //link,src, title and date is required */}
       <Project to='' src={Project1Img} title='' date='' className="project-1"/>
       <Project to='' src={Project2Img} title='' date='' className="project-2"/>
       <Project to='' src={Project3Img} title='' date='' className="project-3"/>
       <Project to='' src={Project4Img} title='' date='' className="project-4"/>
      </div>
    </section>
  )}