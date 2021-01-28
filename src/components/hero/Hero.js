import React from 'react'
import SocialIcons from '../social-icons/SocialIcons'
import {Link} from 'react-router-dom'
import HeroImage from '../../images/hero-img.jpg'
import './hero.css'

export default function Hero() {
  return (
   <header className="hero" id='hero'>
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm Safiye Gulenc</h1>
          <h4>Freelance Full-Stack Web Developer</h4>
          <Link to="./contact" className="btn hero-btn">HIRE ME</Link>
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
