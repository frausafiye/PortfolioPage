import React from 'react'
import {Link} from 'react-router-dom'


//classname,link,src, title and date is required

export default function Project(props) {
  return (
        <Link to={props.to?props.to:'/projects'} className={props.className}>
          <article className="project">
            <img
              src={props.src}
              alt="single project"
              className="project-img"
            />
            <div className="project-info">
              <h4>{props.title}</h4>
              <p>Date:{props.date}</p>
            </div>
          </article>
        </Link>

  )
}
// use live code and link to github account
//