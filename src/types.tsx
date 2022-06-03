import React from "react";

export interface CartItemType {
  id: string;
  storeId: string;
  title: string;
  category: string;
  price: string;
  imageUrl: string;
  createdAt: string;
}

export interface OrderType {
  createdAt: string;
  id: string;
  order: CartItemType[];
  totalPrice: string;
}

export interface AppContextType {
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  items: CartItemType[];
  favorites: CartItemType[];
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  handleAddToCart: (item: CartItemType, location: string) => void;
  handleAddToFavorites: (item: CartItemType, location: string) => void;
  handleDeleteFromCartDrawer: (id: string) => void;
  checkInCartStatus: (obj: CartItemType, location: string) => boolean;
  checkFavoriteStatus: (id: CartItemType) => boolean;
  isLoadingItems: boolean;
  setisLoadingItems: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MainPropType {
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
  Slider: JSX.Element;
}

export interface CardPropsType {
  item: CartItemType;
  location: string;
  isLoadingItems?: boolean;
}
