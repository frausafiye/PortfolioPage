import React from "react";
import Project from "./Project";
import Project2Img from "../../images/bookshopper.png";
import Project1Img from "../../images/kita.jpg";
import "./projects.css";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
        <div className="underline"></div>
        <section className="section-center">
          <p className="projects-text">
            Putting what I've learned into practice, learning more while
            applying, and letting challenges develop me. These were my goals in
            developing projects. Click on the project below to see a demo.
          </p>
        </section>
      </div>
      <div className="section-center projects-center">
        <Project
          to="https://kindergarden-management-tool.vercel.app"
          src={Project1Img}
          title="Kindergarten Management Tool"
          tech="React and NodeJS(Mongoose)"
          className="project-3"
        />
        <Project
          to="https://frausafiye.github.io/book-shop"
          src={Project2Img}
          title="BookShopper"
          tech="React,Redux"
          className="project-1"
        />
      </div>
    </section>
  );
}
