import React from 'react'
import AboutImg from '../../images/about-img.JPG'
import './about.css'

export default function About() {
  return (
<section className="section about" id='about'>
      <div className="section-center about-center">
        <article className="about-img">
          <img
            src={AboutImg}
            className="hero-photo"
            alt="about img"
          />
        </article>
        <article className="about-info">
          <div className="section-title about-title">
            <h2>About me</h2>
            <div className="underline"></div>
          </div>
          <p>
            I decided to change my career path a year ago, taking my experience of working in a team with me and beginning a new journey with Web Development. I started a 13 month coding school and became completely hooked.
          </p>
          <p>
            During the course, I enjoyed the challenges and the effort required to overcome them, the feeling of success that came at the end, and anticipating the new challenges to come.
            Knowing that I will keep learning, as well as keep facing new challenges and continue to solve them, has led me to become incredibly integrated into the field of web development. Do I love my job? Yes!
          </p>
          <div className="btn-box"><a href="#skills" className="btn">my skills</a></div>
        </article>
      </div>
    </section>
  )
}
