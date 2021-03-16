import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './socialIcons.css'

export default function SocialIcons(props) {
  return (
    <ul className={props.classPlus?"social-icons "+props.classPlus:'social-icons'}>
        {/* <li>
          <a href="https://www.twitter.com" className="social-icon">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
        </li>*/}
        <li> 
          <a href="https://www.linkedin.com/in/safiye-gulenc/" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
        {/*<li>
           <a href="https://www.instagram.com" className="social-icon">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </li> */}
      </ul>
  )
}
