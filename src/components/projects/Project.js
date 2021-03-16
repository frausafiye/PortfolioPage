import React from 'react'

export default function Project(props) {
  return (
        <a href={props.to?props.to:'#projects'} className={props.className}>
          <article className="project">
            <img
              src={props.src}
              alt="single project"
              className="project-img"
            />
            <div className="project-info">
              <h4>{props.title}</h4>
              <p>Technologies:{props.tech}</p>
            </div>
          </article>
        </a>

  )
}