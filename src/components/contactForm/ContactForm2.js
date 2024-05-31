import React from "react";
import { Link } from "react-router-dom";
import "./contact-form2.css";

export default function ContactForm() {
  return (
    <div className="background">
      <div className="container">
        <form className="screen">
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="form-title">
                <span>CONTACT</span>
                <span>ME</span>
              </div>
              <div className="form-info">
                or send me an email: s_gulenc@outlook.com
              </div>
            </div>
            <div className="screen-body-item">
              <div className="form-main">
                <div className="form-group">
                  <input className="form-input" placeholder="NAME" />
                </div>
                <div className="form-group">
                  <input className="form-input" placeholder="EMAIL" />
                </div>
                <div className="form-group message">
                  <input className="form-input" placeholder="MESSAGE" />
                </div>
                <div className="form-group buttons">
                  <button className="form-button first-button">CANCEL</button>
                  <button className="form-button">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
