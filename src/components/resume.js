import React, { Component } from "react";

//style
import "./resume.scss";

class Resume extends Component {
  render() {
    return (
      <div>
        <header className="resume-header">
          <div className="container text-center">
            <h1>My Experience</h1>
            <p>Andres Coronado</p>
          </div>
        </header>

        <section className="section-resume">
          <div className="container">
            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card">
                <div className="timeline-img-header-endava">
                  <h2>Development Intern at Endava</h2>
                </div>
                <div className="date">JULY 2019- JANUARY 2020</div>

                <img
                  className="endava-logo"
                  src={require("../assets/images/endava.png")}
                  alt="endava logo"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime ipsa ratione omnis alias cupiditate saepe atque totam
                  aperiam sed nulla voluptatem recusandae dolor, nostrum
                  excepturi amet in dolores. Alias, ullam.
                </p>
                <a
                  className="btn-more"
                  href="https://www.endava.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit Their Page
                </a>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card">
                <div className="timeline-img-header-sabana">
                  <h2>PAT Student at La Sabana</h2>
                </div>
                <div className="date"> JUNE 2015 - JUNE 2019</div>
                <img
                  className="sabana-logo"
                  src={require("../assets/images/sabana.png")}
                  alt="endava logo"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime ipsa ratione omnis alias cupiditate saepe atque totam
                  aperiam sed nulla voluptatem recusandae dolor, nostrum
                  excepturi amet in dolores. Alias, ullam.
                </p>
                <a
                  className="btn-more"
                  href="https://www.unisabana.edu.co/bienestar-universitario/programa-aprendamos-a-trabajar-pat/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit Their Page
                </a>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-img"></div>

              <div className="timeline-content timeline-card">
                <div className="timeline-img-header-corfomento">
                  <h2>Volunteer at Corfomento</h2>
                </div>
                <div className="date">JULY 2018</div>
                <img
                  className="corfomento-logo"
                  src={require("../assets/images/corfomento.png")}
                  alt="endava logo"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime ipsa ratione omnis alias cupiditate saepe atque totam
                  aperiam sed nulla voluptatem recusandae dolor, nostrum
                  excepturi amet in dolores. Alias, ullam.
                </p>
                <a
                  className="btn-more"
                  href="https://corfomento.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit Their Page
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;
