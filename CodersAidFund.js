import React from "react";
import NFTbackground1 from "./images/NFTbackground1.jpg";
import NFThomepage from "./images/NFTCodersAidFund.jpg";
import "./CodersAidFund.css";

const CodersAidFund = () => {
  return (
    <div
      className="codersaidfund-container"
      style={{ backgroundImage: `url(${NFTbackground1})` }}
    >
      <h1>Coders Aid Fund</h1>
      <div className="codersaidfund-content">
        <img
          src={NFThomepage}
          alt="NFT Homepage"
          className="codersaidfund-image"
        />
        <div className="codersaidfund-text-block">
          <h2>Banana kisses and pear hugs</h2>
          <p>
            Coders Aid Fund wants to spread banana kisses and pear hugs to all
            parts of the world.
          </p>
          <p>
            We believe releasing an NFT project is an opportunity for us to have
            a fun and engaging way to build a community for our cause. It raises
            awareness and is a more sustainable way to engage with you.
          </p>
          <p>
            Using an NFT collection solves the chicken and egg question for the
            usage of the platform. You need early adopters to start network
            effects, but the path to incremental adoption is not often clear. We
            will come with about 10,000 bananas and pears enthusiasts.
          </p>
          <p>Learn more about the team in People Involved.</p>
        </div>
      </div>
    </div>
  );
};

export default CodersAidFund;
