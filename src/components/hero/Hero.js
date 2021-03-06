import React from 'react'
import SocialIcons from '../social-icons/SocialIcons'
import {Link} from 'react-router-dom'
import HeroImage from '../../images/about-img.JPG'
import './hero.css'

export default function Hero() {
  return (
   <header className="hero" id='hero'>
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm Safiye Gulenc</h1>
          <h4>Full-Stack Web Developer</h4>
          <Link to="/contactForm" className="btn hero-btn">HIRE ME</Link>
           <SocialIcons classPlus='hero-icons'/>
        </article>
        <article className="hero-img">
          <img
            src={HeroImage}
            className="hero-photo"
            alt="safiye gülenc"
          />
        </article>
      </div>
    </header>
  )
}
