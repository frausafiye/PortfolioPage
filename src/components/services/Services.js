import React from 'react'
import Service from './Service';
import './services.css'
class Aservice{
  constructor(icon,name,text){
    this.icon=icon;
    this.name=name;
    this.text=text
  }
}
const frontEnd=new Aservice(['fas', 'code'],'Front-End','With my knowledge of es7 + html, css, javascript and its library react as well as with my skills to develop responsive web pages, I am ready to work as a front-end developer. Feel free to have a look at my projects!')
const backEnd=new Aservice(['fab', 'android'],'Back-end','In addition to my front-end knowledge and to complement it, I also improved my skills in node.js, mongodb and mongoose. I put it into practice by doing full stack projects. I continue to improve my progress on this issue. Dont forget to check out my projects!')

const myServices=[frontEnd,backEnd]

export default function Services() {

  return (
    <section className="section services" id='services'>
      <div className="section-title">
        <h2>Services</h2>
        <div className="underline"></div>
      </div>
      <div className="services-center section-center">
        {myServices.map(serviceItem=>
          <Service key={serviceItem.name} icon={serviceItem.icon} name={serviceItem.name} text={serviceItem.text}/>
          )}
      </div>
    </section>
    )
}
