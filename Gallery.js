import React from "react";
import NFTbackground3 from "./images/NFTbackground3.jpg";
import NFTExample14 from "./images/NFTExample14.jpg";
import NFTExample16 from "./images/NFTExample16.jpg";
import NFTExample17 from "./images/NFTExample17.jpg";
import NFTExample19 from "./images/NFTExample19.jpg";
import NFTExample21 from "./images/NFTExample21.jpg";
import NFTExample22 from "./images/NFTExample22.jpg";
import "./Gallery.css";

const images = [
  { src: NFTExample14, text: "Cowabunga! Pear Surfise working at the beach" },
  { src: NFTExample16, text: "Plonk! Banana Twang playing Code in my heart" },
  { src: NFTExample17, text: "Lets boggie! Banana Twist dancing to the code" },
  { src: NFTExample19, text: "Heeelp! Banana Skyfallina hurry to work" },
  { src: NFTExample21, text: "Blub, Blub! Pear Scoobie Dana coding at sea" },
  {
    src: NFTExample22,
    text: "Brooom! Pear <Breakana></Breakana> chilling in the street",
  },
];

const Gallery = () => {
  return (
    <div
      className="gallery-container"
      style={{ backgroundImage: `url(${NFTbackground3})` }}
    >
      <h1>Ready, steady, code!</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="image-wrapper" key={index}>
            <img src={image.src} alt={`NFT Example ${index + 1}`} />
            <div className="overlay">
              <div className="overlay-text">{image.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="gallery-text">
        <p>
          Check out some samples of our NFT Gallery. Here you'll find a curated
          collection of our exciting and unique NFTs. Each piece tells a story
          and represents our commitment to innovation and creativity in the
          digital art space. We hope you enjoy exploring our collection as much
          as we laughed creating it.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
