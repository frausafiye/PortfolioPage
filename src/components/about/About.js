import React from 'react'
import {Link} from 'react-router-dom'
import AboutImg from '../../images/about-img.jpeg'
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
            eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
            reiciendis possimus rerum omnis recusandae molestias error
            consequuntur, doloribus inventore reprehenderit officiis. Dolore
            aut, repellendus eius fugiat numquam cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
            eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
            reiciendis possimus rerum omnis recusandae molestias error
            consequuntur, doloribus inventore reprehenderit officiis. Dolore
            aut, repellendus eius fugiat numquam cumque.
          </p>
          <div class="btn-box"><a href="#skills" className="btn">my skills</a></div>
        </article>
      </div>
    </section>
  )
}
