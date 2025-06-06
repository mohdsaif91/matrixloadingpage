import React from "react";

function Footer() {
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
      <div className="extra-space">
        <div className="email-container">
          <div>Email</div>
          <a href="mailto: billing.matrixpharmacy@gmail.com">
            billing.matrixpharmacy@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
}

export default Footer;
