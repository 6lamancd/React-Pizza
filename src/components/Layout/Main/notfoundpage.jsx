import React from "react";
import EmptyCart from "../../../assets/images/icons8-тележка-из-магазина-64.png";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Use navigate to navigate to a different route
    navigate("/");
  };

  return (
    <>
      <div className="notfoundpage">
        <h1 style={{ textAlign: "center" }}>Корзина пустая 😕</h1>
        <p style={{ textAlign: "center", color: "#777777" }} className="error">
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </p>
      </div>
      <div className="emptycart">
        <img src={EmptyCart} alt="man" />
      </div>
      <button className="backButton" onClick={handleClick}>
        Вернуться назад
      </button>
    </>
  );
};

export default NotFoundPage;
