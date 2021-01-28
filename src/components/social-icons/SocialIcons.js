import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './socialIcons.css'

export default function SocialIcons(props) {
  return (
    <ul className={props.classPlus?"social-icons "+props.classPlus:'social-icons'}>
        <li>
          <a to="https://www.twitter.com" className="social-icon">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
        </li>
        <li>
          <a to="https://www.linkedin.com" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li>
          <a to="https://www.instagram.com" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </li>
      </ul>
  )
}
