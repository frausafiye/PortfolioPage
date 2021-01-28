import React from 'react'
// import {Link,NavLink} from 'react-router-dom'

export default function NavLinks(props) {
  return (
     <ul className={props.type==='horizontal'?'horizontal-nav nav-links':'vertical-nav nav-links'}>
        <li>
          {/* <Link to="/">Home</Link> */}
             <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
          {/* <NavLink to={{pathname:"/",hash:'about'}}>About</NavLink> */}
        </li>
        <li>
          {/* <Link to="/projects">Projects</Link> */}
          <a href="#projects">Projects</a>
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          <a href="#services">Services</a>
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          <a href="#contact">Contact</a>
        </li>
      </ul>
  )
}
