import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Home from "./Home";
import NFTProject from "./NFTProject";
import Gallery from "./Gallery";
import CodersAidFund from "./CodersAidFund";
import Partners from "./Partners";
import PeopleInvolved from "./PeopleInvolved";
import Media from "./Media";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfUse from "./TermsOfUse";
import Button from "./Button";
import "./App.css";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <FaBars className="menu-icon" onClick={toggleNav} />
          <div className="button-container">
            <Button />
          </div>
        </header>
        {navOpen && <div className="backdrop" onClick={toggleNav}></div>}
        <nav className={navOpen ? "nav-open" : ""}>
          <ul>
            <li>
              <a href="/" onClick={toggleNav}>
                Home
              </a>
            </li>
            <li>
              <a href="/nft-project" onClick={toggleNav}>
                NFT Project
              </a>
            </li>
            <li>
              <a href="/gallery" onClick={toggleNav}>
                Gallery
              </a>
            </li>
            <li>
              <a href="/coders-aid-fund" onClick={toggleNav}>
                Coders Aid Fund
              </a>
            </li>
            <li>
              <a href="/partners" onClick={toggleNav}>
                Partners
              </a>
            </li>
            <li>
              <a href="/people-involved" onClick={toggleNav}>
                People Involved
              </a>
            </li>
            <li>
              <a href="/media" onClick={toggleNav}>
                Media
              </a>
            </li>
            <li>
              <a href="/privacy-policy" onClick={toggleNav}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-use" onClick={toggleNav}>
                Terms of Use
              </a>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nft-project" element={<NFTProject />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/coders-aid-fund" element={<CodersAidFund />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/people-involved" element={<PeopleInvolved />} />
            <Route path="/media" element={<Media />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
