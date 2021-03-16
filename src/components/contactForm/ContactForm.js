import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './contact-form.css'

export default function ContactForm(props) {
  const [isSent,setIsSent]=useState(false)

  const submitHandler=(e)=>{
    //how to send an email without backend!!!!!
    e.preventDefault()
    let formData=new FormData()
    let mail={}
    for(let pair of formData){
      mail[pair[0]]=pair[1]}
    setIsSent(true)
  }
  return (
    <main id="container">
      {isSent ? <div className="succeed-box">
                  <p>Thank you for your message.I will get back to you as soon as possible.</p>
                </div> 
              :<section className="form-wrap">
        <header>
          <h3>Send me a message!</h3>
          <p>Give me a feedback or a job offer</p>
        </header>
        <form onSubmit={(e)=>submitHandler(e)} mailto="s_gulenc@outlook.com">
          <div className="form-group">
            <label htmlFor="range">How much did you like my portfolio?</label>
            <input type="range" name="range" id="range" />
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="firstName" id="first-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="lastName" id="last-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message to me:</label>
            <textarea name="message" id="message" cols="30" rows="10" />
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
      </section>}
      <div className="btn-box">      
        <Link to="/"><button className="btn form-btn">Back</button></Link>
      </div>

    </main>
  )
}
