import Card from "../Card";
import cls from "./style.module.scss";

const CardList = ({ data, handleCard }) => {
  return (
    <ul className={cls.list}>
      {data.map((item) => (
        <Card key={item.id} cardData={item} handleCard={handleCard} />
      ))}
    </ul>
  );
};

export default CardList;
