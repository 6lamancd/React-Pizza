import React from "react";
import MeatPizza from "../../../assets/images/cart.jpeg";

const mainInner = () => {
  return (
    <>
      <h2 className="titlePizza">Пицца Мясной пир</h2>
      <div className="AboutPizza">
        <div>
          <img className="MeatPizza" src={MeatPizza} alt="man" />
        </div>
        <div>
          <p className="informationPizza">
            Соус на выбор, сыр "Моцарелла", цыпленок по-техасски, бекон,
            ветчина, томаты, маринованные огурцы, красный лук, маслины, укроп.
          </p>
          <hr width="660" />
          <h3>Доступные варианты</h3>
          <p>НА КАКОМ СОУСЕ</p>
          <button>НА ТОМАТНОМ</button>
          <button>НА ТАРТАРЕ</button>
          <p>ВЫБЕРИТЕ РАЗМЕР</p>
          <button>D-30cm</button>
          <button>D-40cm</button>
          <p>ДОПОЛНИТЕЛЬНО К ПИЦЦЕ</p>
          <button>СЫР МОЦАРЕЛЛА</button>
        </div>
      </div>
    </>
  );
};

export default mainInner;
