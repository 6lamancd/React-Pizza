import React from "react";
import ListItem from "../ListItem";

const List = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem
          key={self.crypto.randomUUID()}
          id={self.crypto.randomUUID()}
          item={item}
        />
      ))}
    </ul>
  );
};

export default List;
