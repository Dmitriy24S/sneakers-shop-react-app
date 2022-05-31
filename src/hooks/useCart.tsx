import React, { useContext } from "react";
import { AppContext } from "../App";

export const useCart = () => {
  const { cartItems, setCartItems } = useContext<any>(AppContext);
  // Get total value of all items in cart - Cart total
  const totalCartPrice = cartItems
    ?.reduce((sum: number, item: any) => sum + Number(item.price), 0)
    .toFixed(2);

  return { cartItems, setCartItems, totalCartPrice };
};
