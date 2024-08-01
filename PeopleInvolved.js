import React from "react";
import NFTbackground6 from "./images/NFTbackground6.jpg";
import NFTpeople1 from "./images/NFTpeople1.jpg";
import picJanSofta from "./images/picJanSofta.jpeg";
import NFTpeople2 from "./images/NFTpeople2.jpg";
import NFTpeople3 from "./images/NFTpeople3.jpg";
import NFTpeople4 from "./images/NFTpeople4.jpg";
import "./PeopleInvolved.css";

const teamMembers = [
  {
    name: "Pear Hapilton",
    initialImage: NFTpeople1,
    hoverImage: picJanSofta,
    linkedIn: "https://www.linkedin.com/in/jan-softa-680a79b2/",
  },
  {
    name: "Banana Boogieman",
    initialImage: NFTpeople2,
    hoverImage: picJanSofta,
    linkedIn: "https://www.linkedin.com/in/jan-softa-680a79b2/",
  },
  {
    name: "Banana Splitson",
    initialImage: NFTpeople3,
    hoverImage: picJanSofta,
    linkedIn: "https://www.linkedin.com/in/jan-softa-680a79b2/",
  },
  {
    name: "Banana Bre",
    initialImage: NFTpeople4,
    hoverImage: picJanSofta,
    linkedIn: "https://www.linkedin.com/in/jan-softa-680a79b2/",
  },
];

const PeopleInvolved = () => {
  return (
    <div
      className="peopleinvolved-container"
      style={{ backgroundImage: `url(${NFTbackground6})` }}
    >
      <h1>People Involved</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="image-container">
              <img
                src={member.initialImage}
                alt={member.name}
                className="initial-image"
              />
              <img
                src={member.hoverImage}
                alt={member.name}
                className="hover-image"
              />
            </div>
            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
              {member.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleInvolved;
