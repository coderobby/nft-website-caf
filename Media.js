import React from "react";
import "./Media.css";
import discordImage from "./images/NFTdiscordlogo.jpg"; // Replace with the actual path to your image
import twitterImage from "./images/NFTtwitterlogo.jpg"; // Replace with the actual path to your image
import telegramImage from "./images/NFTtelegramlogo.jpg"; // Replace with the actual path to your image
import linkedinImage from "./images/NFTlinkedinlogo.jpg"; // Replace with the actual path to your image

const Media = () => {
  return (
    <div className="media-container">
      <h1>Media</h1>
      <div className="media-gallery">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <img src={discordImage} alt="Discord" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterImage} alt="Twitter" />
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={telegramImage} alt="Telegram" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinImage} alt="LinkedIn" />
        </a>
      </div>
      <div className="media-text-box">
        <p>
          Follow us on our social media platforms to stay updated with our
          latest news and events. Join our community on Discord, follow us on
          Twitter, engage with us on Reddit, and connect with us on LinkedIn. We
          are excited to share our journey with you!
        </p>
      </div>
    </div>
  );
};

export default Media;
