import React, { Component } from "react";
import pizza from "../../../assets/images/img1.png";
import cart from "../../../assets/images/cart.png";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="desktop-1">
          <div className="firstStep">
            <div className="firstImg">
              <Link to="/">
                <img src={pizza} alt="elaman" />
              </Link>
            </div>
            <div>
              <h3 className="some-title">REACT PIZZA</h3>
              <p className="some-text">самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div className="divInput">
            <input
              className="input-1"
              type="text"
              placeholder="Введите текст для поиска..."
            />
            <svg
              className="secondImg"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
          <div className="cart">
            <div>
              <p>520 ₽</p>
            </div>
            <div>
              <p>|</p>
            </div>
            <div className="thirdImg">
              <img src={cart} alt="fuck" />
            </div>
            <div>
              <p>3</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
