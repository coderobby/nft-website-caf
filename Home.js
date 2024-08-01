import React from "react";
import NFTbackground1 from "./images/NFTbackground1.jpg";
import NFTExample10 from "./images/NFTExample10.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${NFTbackground1})` }}
    >
      <h1>The Bestest Besties collection</h1>
      <div className="home-content">
        <img src={NFTExample10} alt="NFT Homepage" className="home-image" />
        <div className="home-text-block">
          <h2>
            Quote from the jungle: "When life goes bananas keep a pear close."
          </h2>
          <p>Get funky with the Bestest Besties collection to raise funds</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
