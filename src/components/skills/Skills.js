import React from "react";
import Skill from "./Skill";
import skillList from "./skillList";
import "./skills.css";

export default function Skills(props) {
  return (
    <section className="section skills" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <article>
          <h3>Tech Skills</h3>
          <Skill type="finished" value="100%" />
        </article>
        <div className="skillBoxContainer">
          {skillList.technologies.map((skill) => (
            <p className="skillBox">{skill}</p>
          ))}
        </div>
        <article>
          <h3>Soft Skills</h3>
          <Skill type="finished" value="100%" />
        </article>
        <div className="skillBoxContainer">
          {skillList.softSkills.map((skill) => (
            <p className="skillBox">{skill}</p>
          ))}
        </div>
        <article>
          <h3>Loading</h3>
          <Skill type="loading" value="100%" />
        </article>
        <div className="skillBoxContainer">
          {skillList.loading.map((skill) => (
            <p className="skillBox">{skill}</p>
          ))}
        </div>
      </div>
      <div className="section-center"></div>
    </section>
  );
}
