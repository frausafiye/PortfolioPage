import React from 'react'
import Skill from './Skill'
import './skills.css'

export default function Skills(props) {
  return (
    <section className="section skills" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center skills-center">
        <article>
          <h3>Front End</h3>
            <Skill lang='HTML/CSS' value='80%' />
            <Skill lang='Javascript' value='80%' />
            <Skill lang='React' value='70%'/>
        </article>
        <article>
          <h3>Back End</h3>
           <Skill lang='Node' value='60%'/>
           <Skill lang='Python' value='20%'/>
        </article>
      </div>
    </section>
  )
}
