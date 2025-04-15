import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="social-call">
        <div className="phone">
          <div className="contact">
            <div className="country-text">USA</div>
            <div className="number-container">
              <a href="tel:+18883394142">call +1 888 3394142</a>
              <a href="tel:+17203548844">text +1 720 3548844</a>
            </div>
          </div>
          <div className="contact">
            <div className="country-text">Austrila</div>
            <div className="number-container">
              <a href="tel:+61272021899">call +61 272 021 899</a>
              <a href="tel:+61437070227">text +61 437 070 227</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row v-center">
          <div className="header-item item-left">
            <div className="logo">
              <Link to="/login">
                <a href="/#">Matrix Pharmacy</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
