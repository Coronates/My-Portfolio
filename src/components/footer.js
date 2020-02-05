import React from "react";

// Assets
import locationIcon from "../assets/images/location-icon.svg";
// Style files
import "./footer.scss";

const footer = props => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="presentation__container">
              <small className="presentation__container--copy">
                Made with ReactJS By Andrés Coronado
              </small>
            </div>
            <div className="footer--location">
              <span>Bogotá</span>
              <img src={locationIcon} alt="location" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
