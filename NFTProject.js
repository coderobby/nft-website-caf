import React from "react";
import NFTbackground1 from "./images/NFTbackground1.jpg";
import NFThomepage from "./images/NFT:NFTproject.jpg";
import "./NFTProject.css";

const NFTproject = () => {
  return (
    <div
      className="NFTproject-container"
      style={{ backgroundImage: `url(${NFTbackground1})` }}
    >
      <h1>For love, compassion and code</h1>
      <div className="NFTproject-content">
        <img src={NFThomepage} alt="NFT Project" className="NFTproject-image" />
        <div className="NFTproject-text-block">
          <h2>The Bestest Besties collection is for loving people</h2>
          <p>
            We are pair of pears and a bunch of bananas that believe in peoples
            power to change their own lives given the chance.
          </p>
          <p>
            We do this by training refugees, financially disadvantaged people
            and people from under represented groups to become coders so they
            can support themselves.
          </p>
          <p>
            The Bestest Besties collection is released to raise funds for our
            project Coders Aid Fund. The team will build a platform where
            charities and social entrepreneurs can register, create a profile
            and raise crypto funds for trainees to take courses and
            certifications.
          </p>
          <p>
            The trainees are validated on the blockchain by a charity or social
            entrepreneur and it helps build trust of donating to these groups.
          </p>
          <p>
            All charities, social entrepreneurs and each of their validated
            members also get a donation link you can donate too.
          </p>
          <p>
            We use dynamic NFTs that change depending on how the trainees
            progress in the courses work that enable you to follow their
            progress
          </p>
          <p>
            These bananas and pears want Coders Aid Fund to benefit from the
            raise, but also help out SuperteamUK, Solana Foundation and the
            charity Code Your Future. We do this by donating to these from our
            sale of NFTs in the Bestest Besties collection.
          </p>
          <p>
            The distribution per NFT will be $50 to Coders Aid Fund, $25 to
            SuperteamUK, $25 to Solana Foundation, $25 to Code Your Future and
            $25 to marketing.
          </p>
          <p>
            You guessed it - the price for our funky bananas and heartthrob
            pears are $150 each.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFTproject;
