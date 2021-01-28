import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavLinks from './nav-links/NavLinks'
import './navbar.css'


export default function Navbar() {
  return (
    <nav class="nav">
      <NavLinks type='horizontal'/>
      <div class="vertical-nav-box">
        <button class="nav-btn" id="nav-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <NavLinks type='vertical'/>
      </div>
    </nav>
  )
}
