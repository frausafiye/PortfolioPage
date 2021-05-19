/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./contact-form.css";

export default function ContactForm() {
  return (
    <main id='container'>
      <section className='form-wrap'>
        <header>
          <h3>Send me a message!</h3>
          <p>Give me a feedback or a job offer</p>
        </header>
        <form action='https://formsubmit.co/s_gulenc@outlook.com' method='POST'>
          <input
            type='hidden'
            name='_subject'
            value='Message from a visiter on portfolio!'
          />
          <input
            type='hidden'
            name='_autoresponse'
            value="I've received your email. Thank you for filling the form and sending me your feedback. I'll get back to you soon."></input>
          <div className='form-group'>
            <label htmlFor='range'>How much did you like my portfolio?</label>
            <input type='range' name='range' id='range' />
          </div>
          <div className='form-group'>
            <label htmlFor='first-name'>First Name</label>
            <input type='text' name='firstName' id='first-name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='last-name'>Last Name</label>
            <input type='text' name='lastName' id='last-name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Your message to me:</label>
            <textarea name='message' id='message' cols='30' rows='10' />
          </div>
          <button type='submit' className='btn'>
            Send
          </button>
        </form>
      </section>
      <div className='btn-box'>
        <Link to='/' className='btn form-btn'>
          Back
        </Link>
      </div>
    </main>
  );
}
