import React from "react";
import pizza1 from "../../../assets/images/pizza1.png";
import pizza2 from "../../../assets/images/pizza2.png";
import pizza3 from "../../../assets/images/pizza3.png";
import pizza4 from "../../../assets/images/pizza4.png";
import pizza5 from "../../../assets/images/pizza5.png";
import pizza6 from "../../../assets/images/pizza6.png";
import pizza7 from "../../../assets/images/pizza7.png";
import pizza8 from "../../../assets/images/pizza8.png";
import pizza9 from "../../../assets/images/pizza9.png";
import { Link } from "react-router-dom";
import firstImg from "../../../assets/images/image10.png";
import secondImg from "../../../assets/images/image13.png";
import thirdImg from "../../../assets/images/image15.png";
import fourthImg from "../../../assets/images/image12.png";
import fivethImg from "../../../assets/images/image16.png";
import "./style.css";

const images = [firstImg, secondImg, thirdImg, fourthImg, fivethImg];

const pizzas = [
  pizza1,
  pizza2,
  pizza3,
  pizza4,
  pizza5,
  pizza6,
  pizza7,
  pizza8,
  pizza9,
];

const index = () => {
  return (
    <main>
      <div className="grid-card">
        <div>
          <img src={firstImg} alt="" />
        </div>
        <div>
          <img src={secondImg} alt="" />
        </div>
        <div>
          <img src={thirdImg} alt="" />
        </div>
        <div>
          <img src={fourthImg} alt="" />
        </div>
        <div className="finallyImg">
          <img src={fivethImg} alt="" />
        </div>
      </div>
      <div className="beforePizza">
        <div className="list">
          <ul className="ul-style">
            <li className="differentLi">
              <Link className="justLinkAll" to="/">
                Все
              </Link>
            </li>
            <li className="width">
              <Link className="justLink" to="/MainInner">
                Мясные
              </Link>
            </li>
            <li>
              <Link className="justLink" to="/NotFoundPage">
                Вегетарианская
              </Link>
            </li>
            <li className="width">Гриль</li>
            <li className="width">Острые</li>
          </ul>
        </div>
        <br />
        <div className="nav-bar">
          <p>
            Сортировка по:{" "}
            <a className="popular" href="/">
              популярности
            </a>
          </p>
        </div>
      </div>
      <div>
        <h1>Все пиццы</h1>
      </div>
      <div className="tablePizza">
        <div>
          <div>
            <img src={pizza1} alt="" />
          </div>
          <h2>Чизбургер-пицца</h2>
          <div className="kindOfPizza">
            <p className="hover">тонкое</p>
            <p className="hover">традиционное</p>
            <p className="hover">26 см.</p>
            <p className="hover">30 см.</p>
            <p className="hover">40 см.</p>
          </div>
          <div className="price">
            <p>от 395 ₽</p>
            <button className="plusOne">+ Добавить 2</button>
          </div>
        </div>
        <div>
          <div>
            <img src={pizza2} alt="" />
          </div>
          <h2>Сырная</h2>
          <div className="kindOfPizza">
            <p className="hover">тонкое</p>
            <p className="hover">традиционное</p>
            <p className="hover">26 см.</p>
            <p className="hover">30 см.</p>
            <p className="hover">40 см.</p>
          </div>
          <div className="price">
            <p>от 450 ₽</p>
            <button className="plusOne">+ Добавить 2</button>
          </div>
        </div>
        <div>
          <div>
            <img src={pizza3} alt="" />
          </div>
          <h2>Креветки по-азиатски</h2>
          <div className="kindOfPizza">
            <p className="hover">тонкое</p>
            <p className="hover">традиционное</p>
            <p className="hover">26 см.</p>
            <p className="hover">30 см.</p>
            <p className="hover">40 см.</p>
          </div>
          <div className="price">
            <p>от 595 ₽</p>
            <button className="plusOne">+ Добавить 2</button>
          </div>
        </div>
        <div>
          <div>
            <img src={pizza4} alt="" />
          </div>
          <h2>Сырный цыпленок</h2>
          <div className="kindOfPizza">
            <p className="hover">тонкое</p>
            <p className="hover">традиционное</p>
            <p className="hover">26 см.</p>
            <p className="hover">30 см.</p>
            <p className="hover">40 см.</p>
          </div>
          <div className="price">
            <p>от 420 ₽</p>
            <button className="plusOne">+ Добавить 2</button>
          </div>
        </div>
        <div>
          <div>
            <img src={pizza5} alt="" />
          </div>
          <h2>Чизбургер-пицца</h2>
          <div className="kindOfPizza">
            <p className="hover">тонкое</p>
            <p className="hover">традиционное</p>
            <p className="hover">26 см.</p>
            <p className="hover">30 см.</p>
            <p className="hover">40 см.</p>
          </div>
          <div className="price">
            <p>от 240 ₽</p>
            <button className="plusOne">+ Добавить 2</button>
          </div>
        </div>
        <div>
          <div>
            <img src={pizza6} alt="" />
          </div>
          <h2>Сырная</h2>
          <div className="kindOfPizza">
            <p className="hover">тонкое</p>
            <p className="hover">традиционное</p>
            <p className="hover">26 см.</p>
            <p className="hover">30 см.</p>
            <p className="hover">40 см.</p>
          </div>
          <div className="price">
            <p>от 350 ₽</p>
            <button className="plusOne">+ Добавить 2</button>
          </div>
        </div>
        <div>
          <div>
            <img src={pizza7} alt="" />
          </div>
          <h2>Креветки по-азиатски</h2>
          <div className="kindOfPizza">
            <p>тонкое</p>
            <p>традиционное</p>
            <p>26 см.</p>
            <p>30 см.</p>
            <p>40 см.</p>
          </div>
          <div className="price">
            <p>от 365 ₽</p>
            <button className="plusOne">+ Добавить 2</button>
          </div>
        </div>
        <div>
          <div>
            <img src={pizza8} alt="" />
          </div>
          <h2>Сырный цыпленок</h2>
          <div className="kindOfPizza">
            <p>тонкое</p>
            <p>традиционное</p>
            <p>26 см.</p>
            <p>30 см.</p>
            <p>40 см.</p>
          </div>
          <div className="price">
            <p>от 315 ₽</p>
            <button className="plusOne">+ Добавить 2</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
