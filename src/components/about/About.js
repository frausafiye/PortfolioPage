import React from "react";
import AboutImg from "../../images/hero-img.jpg";
import "./about.css";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-center about-center">
        <article className="about-img">
          <img src={AboutImg} className="hero-photo" alt="about img" />
        </article>
        <article className="about-info">
          <div className="section-title about-title">
            <h2>About me</h2>
            <div className="underline"></div>
          </div>
          <p>
            I am at the foot of the mountains and enjoy every step I take to the
            peaks. I regret not having discovered the beauty of these mountains
            beforehand.{" "}
          </p>
          <p>
            As I climb higher, my vision becomes clearer, alternatives emerge,
            and with the experience gained from what I left behind, each step
            becomes stronger than the previous one, fueling my motivation even
            more.
          </p>
          <p>This is my motivation as a web developer...</p>
          <div className="btn-box">
            <a href="#skills" className="btn">
              see my skills
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
