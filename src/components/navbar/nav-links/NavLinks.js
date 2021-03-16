import React from 'react'

export default function NavLinks(props) {
  return (
     <ul className={props.type==='horizontal'?'horizontal-nav nav-links':'vertical-nav nav-links'}>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
  )
}
