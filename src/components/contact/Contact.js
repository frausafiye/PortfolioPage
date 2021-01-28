import React from 'react'
import {Link} from 'react-router-dom'
import ConnectImg from '../../images/connect-img.jpg'
import './contact.css'

export default function Contact() {
  return (
    <section className="section connect" >
      <div className="connect-img-container">
        <div className="connect-img img-1">
          <img src={ConnectImg} alt="connect-img" />
        </div>
        <div className="connect-img img-2">
          <img src={ConnectImg} alt="connect-img" />
        </div>
        <div className="connect-img img-3">
          <img src={ConnectImg} alt="connect-img" />
        </div>
        <div className="connect-img img-4">
          <img src={ConnectImg} alt="connect-img" />
        </div>
      </div>
      <div className="connect-banner"id='contact'>
        <div className="section-title">
          <h2>Let's Get In Touch</h2>
          <div className="underline"></div>
        </div>
        <p className="connect-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
          perferendis exercitationem sit. Beatae eius commodi officiis rem
          soluta ratione dignissimos quisquam tempore laudantium, porro vitae
          cupiditate dicta magni quas corrupti aperiam, rerum minus odio totam
          repellendus delectus nostrum veniam!
        </p>
        <Link to="/contact" className="btn connect-btn">CONTACT ME</Link>
      </div>
    </section>
      )
}
