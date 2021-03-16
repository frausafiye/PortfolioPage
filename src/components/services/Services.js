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
const webDev=new Aservice(['fas', 'code'],'Web Development','   Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum in. Voluptates amet architecto sed reiciendis voluptate voluptatem animi aspernatur error velit, sequi nihil, id repudiandae. Cupiditate omnis sequi iure aut et? Qui sapiente, dolorem alias culpa maxime quas dolor doloribus ipsum consectetur obcaecati, fuga ex velit nobis officia eum.')
const webDesign=new Aservice(['fab', 'sketch'],'Web Design','   Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum in. Voluptates amet architecto sed reiciendis voluptate voluptatem animi aspernatur error velit, sequi nihil, id repudiandae. Cupiditate omnis sequi iure aut et? Qui sapiente, dolorem alias culpa maxime quas dolor doloribus ipsum consectetur obcaecati, fuga ex velit nobis officia eum.')
const appDesign=new Aservice(['fab', 'android'],'App Design','   Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum in. Voluptates amet architecto sed reiciendis voluptate voluptatem animi aspernatur error velit, sequi nihil, id repudiandae. Cupiditate omnis sequi iure aut et? Qui sapiente, dolorem alias culpa maxime quas dolor doloribus ipsum consectetur obcaecati, fuga ex velit nobis officia eum.')

const myServices=[webDev,webDesign,appDesign]

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
