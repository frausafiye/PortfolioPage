import React from 'react'
import Skill from './Skill'
import './skills.css'

export default function Skills(props) {
  return (
    <section class="section skills" id="skills">
      <div class="section-title">
        <h2>Skills</h2>
        <div class="underline"></div>
      </div>
      <div class="section-center skills-center">
        <article>
          {/* <!-- add animations --> */}
          <h3>Front End</h3>
           <Skill lang='HTML/CSS' value='90%' />
           <Skill lang='Javascript' value='80%' />
           <Skill lang='React' value='70%'/>
        </article>
        <article>
          <h3>Back End</h3>
           <Skill lang='Node' value='50%'/>
           <Skill lang='Python' value='20%'/>
        </article>
      </div>
    </section>
  )
}
