import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <MetaData title="CartItemCard" />
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}> REMOVE</p>
      </div>
    </div>
  );
};

export default CartItemCard;
