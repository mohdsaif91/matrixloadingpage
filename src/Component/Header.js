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
              <a href="tel:+18886821109">call +1 888 6821109</a>
              <a href="tel:+14342058536">text +1 434 2058536</a>
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
