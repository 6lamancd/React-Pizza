import React, { useState } from "react";
import cls from "./style.module.scss";

const Card = ({ cardData, handleCard }) => {
  console.log(cardData.name);
  // const [load, setLoad] = useState(false);
  // const [count, setCount] = useState(5);
  // const { handleCard, type } = props;
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((prevState) => prevState--);
  //   }, 1000);
  //   if (count == 0) {
  //     setLoad(false);
  //     return clearInterval(timer);
  //   }
  // });
  return (
    <li className={cls.card} onClick={() => handleCard(cardData)}>
      <div className={cls.card__img}>
        <img src={cardData.img} alt="cardData.name" />
      </div>
      <h3 className={cls.card__title}>{cardData.name}</h3>
      <p className={cls.card__text}>
        {cardData.type}
        {cardData.abilities.map((abil) => (
          <span key={self.crypto.randomUUID()}>
            {cardData.type}
            {cardData.abilities.map((abil) => (
              <span key={self.crypto.randomUUID()}>{abil}</span>
            ))}
          </span>
        ))}
      </p>
    </li>
  );
};

export default Card;
