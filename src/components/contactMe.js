import React, { Component } from "react";
//syles
import "./contactMe.scss";

class ContactMe extends Component {
  render() {
    return (
      <div id="contact">
        <div className="center">
          <div className="card green">
            <div className="additional">
              <div className="user-card">
                <div className="contact-image">
                  <img
                    className="avatar-contact"
                    alt="avatar cartoonized"
                    src={require("../assets/images/coronate.jpeg")}
                  />
                </div>
              </div>
              <div className="more-info">
                <h1>Andrés Coronado</h1>
                <div className="description">
                  <span>
                    I'm a committed and cooperative person who's always willing
                    to learn, I'm looking for a position as a Front end
                    developer.
                  </span>
                </div>
                <div className="mobile-space"></div>
                <div className="data">
                  <div className="data-block">
                    <i className="fa fa-map-marker"></i>
                    <div className="title">Bogotá - Colombia</div>
                  </div>
                  <div className="data-block">
                    <i className="fa fa-envelope-o"></i>
                    <div className="title">andrescoronadopinilla@gmail.com</div>
                  </div>
                  <div className="data-block">
                    <i className="fa fa-skype"></i>
                    <div className="title">live:andrescoronado_97</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="general">
              <h1>Andrés Coronado</h1>
              <h2>Let's Build Something Together...</h2>
              <br></br>
              <p>
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
              </p>
              <span className="more">Mouse over the card for more info</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
