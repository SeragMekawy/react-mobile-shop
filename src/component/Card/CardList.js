import React from "react";
import CardItem from "./CardItem";

const CardList = ({ value }) => {
  const { cart } = value;
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CardItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
};
export default CardList;
