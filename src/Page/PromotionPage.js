import React, { useState } from "react";

import { data } from "../util/data";
import MedicensImage from "../assets/medical.png";

const initialSearch = {
  show: false,
  text: "",
};

function PromotionPage() {
  const [search, setSearch] = useState({ ...initialSearch });
  const [medicen] = useState([...data]);
  const [filter, setFilter] = useState([...data]);

  const resetSearch = (e) => {
    e.preventDefault();
    setSearch({ ...search, text: "" });
  };

  const searchProduct = (e) => {
    const filteredProduct = medicen.filter((f) =>
      f.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setFilter([...filteredProduct]);
    console.log(filteredProduct, "<>?");
    setSearch({ ...search, text: e.target.value });
  };

  const lossFocus = () => {
    setSearch({ ...initialSearch });
    setFilter([...data]);
  };
  console.log("aa kar gaya");
  return (
    <div>
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
                  80% off on any Pill/Tablet/Dosages
                  <br />
                </strong>
              </div>
              <div className="img-container">
                <img alt="" className="medical-image" src={MedicensImage} />
              </div>
            </div>
          </div>
        </li>
      </ul>

      <section className="product-list">
        <div className="container">
          <h2 className="product-title">Featured Products</h2>
          <div className="search-container">
            {search.show ? (
              <div className="search-bar">
                <div className="search-input">
                  <input
                    value={search.text}
                    onChange={(e) => searchProduct(e)}
                    type="text"
                    onBlur={() => lossFocus()}
                    placeholder="Search For Product"
                  />
                  <a href="/#" className="search-cancel">
                    <i
                      className="fas fa-times"
                      onClick={(e) => resetSearch(e)}
                    ></i>
                  </a>
                </div>
              </div>
            ) : (
              <div
                className="icon-container"
                onClick={() => {
                  setSearch({ ...search, show: !search.show });
                }}
              >
                <i className="fa fa-search search-icon" aria-hidden="true" />
                <div className="icon-text">Click here to search</div>
              </div>
            )}
          </div>

          <div className="row">
            <div className="item">
              <div className="product">
                {filter.map((m) => (
                  <div key={m.id} className="product-container">
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
    </div>
  );
}

export default PromotionPage;
