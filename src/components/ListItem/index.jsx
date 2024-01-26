import React from "react";

const ListItem = ({ item, id }) => {
  return (
    <li onClick={() => console.log(id)}>
      {item.text}
      {id}
    </li>
  );
};

export default ListItem;
