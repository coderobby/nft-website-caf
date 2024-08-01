import React from "react";
import NFTbackground5 from "./images/NFTbackground5.jpg";
import Partner1Image from "./images/Partner1.jpg";
import Partner2Image from "./images/Partner2.jpg";
import Partner3Image from "./images/Partner3.png";
import "./Partners.css";

const Partners = () => {
  return (
    <div
      className="partners-container"
      style={{ backgroundImage: `url(${NFTbackground5})` }}
    >
      <h1>Partners</h1>
      <div className="partners-content">
        <div className="partner">
          <img src={Partner1Image} alt="Partner 1" className="partner-image" />
          <div className="partner-text">
            <h2>SuperteamUK</h2>
            <p>Description of Partner 1 goes here.</p>
          </div>
        </div>
        <div className="partner">
          <img src={Partner2Image} alt="Partner 2" className="partner-image" />
          <div className="partner-text">
            <h2>Solana Foundation</h2>
            <p>Description of Partner 2 goes here.</p>
          </div>
        </div>
        <div className="partner">
          <img src={Partner3Image} alt="Partner 3" className="partner-image" />
          <div className="partner-text">
            <h2>Code Your Future</h2>
            <p>Description of Partner 3 goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
