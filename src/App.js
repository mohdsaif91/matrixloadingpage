import { useEffect, useState } from "react";

import MedicensImage from "./assets/medical.png";
import { data } from "./util/data";

function App() {
  const [search, setSearch] = useState(false);
  const [medicen] = useState([...data]);

  return (
    <div className="App">
      <header className="header">
        <div className="social-call">
          <div className="phone">
            <div className="contact">
              <div className="country-text">USA</div>
              <div className="number-container">
                <a href="tel:+917869961901">call +1 888 6821109</a>
                <a href="tel:+917869961901">text +1 678 7223433</a>
              </div>
            </div>
            <div className="contact">
              <div className="country-text">Austrila</div>
              <div className="number-container">
                <a href="tel:+917869961901">call +61 272 021 899</a>
                <a href="tel:+917869961901">text +61 437 070 227</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <a href="#">Matrix Pharmacy</a>
              </div>
              <div className="search-bar">
                <div className="search-input">
                  <input type="text" placeholder="Search For Product" />
                  <a href="#" className="search-cancel">
                    <i className="fas fa-times"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="header-item item-center">
              <div className="menu-overlay"></div>
              <nav className="menu">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fas fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <ul id="#adaptive" className="cs-hidden">
        <li className="item-a">
          <div className="full-slider-box f-slide-1">
            <h1 className="typing">Sale is live !! </h1>
            <div className="slider-text-container">
              <div className="f-slider-text">
                <span className="sub-text">
                  We are runnig promotions prices are low like never before
                </span>
                <strong>
                  $0.50 cents per Pill/Tablet/Capsule
                  <br />
                </strong>
              </div>
              <div className="img-container">
                <img className="medical-image" src={MedicensImage} />
              </div>
            </div>
          </div>
        </li>
      </ul>

      <section className="product-list">
        <div className="container">
          <h2 className="product-title">Featured Products</h2>
          <div className="row">
            <div className="item">
              <div className="product">
                {medicen.map((m) => (
                  <div ley={m.id} className="product-container">
                    <div className="product-thumb">
                      <img src={m.imageName} alt="" className="pro-thumb-img" />
                    </div>

                    <div className="product-info">
                      <h1 className="product-name">{m.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <header className="header">
        <div className="social-call">
          <div className="phone">
            <div className="contact">
              <div className="country-text">USA</div>
              <div className="number-container">
                <a href="tel:+917869961901">call +1 888 6821109</a>
                <a href="tel:+917869961901">text +1 678 7223433</a>
              </div>
            </div>
            <div className="contact">
              <div className="country-text">Austrila</div>
              <div className="number-container">
                <a href="tel:+917869961901">call +61 272 021 899</a>
                <a href="tel:+917869961901">text +61 437 070 227</a>
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
    </div>
  );
}

export default App;
