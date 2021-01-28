import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Service(props) {
  return (
    <article className="service">
          <FontAwesomeIcon icon={props.icon} />
          <h4>{props.name}</h4>
          <div className="underline"></div>
          <p>
         {props.text}
          </p>
        </article>
  )
}
