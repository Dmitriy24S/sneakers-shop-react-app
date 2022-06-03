import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Main from "./pages/Main/Main";
import Favorites from "./pages/Favorites/Favorites";
import Orders from "./pages/Orders/Orders";
import { AppContextType, CartItemType } from "./types";

// export const AppContext = createContext({});
export const AppContext = createContext<AppContextType | null>(null);

function App() {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [favorites, setFavorites] = useState<CartItemType[]>([]);
  const [isLoadingItems, setisLoadingItems] = useState<boolean>(true);

  // Get / update cart info when open cart drawer
  // useEffect(() => {
  //   axios
  //     .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart")
  //     .then((res) => {
  //       setCartItems(res.data);
  //     });
  // }, [isCartDrawerOpen]);

  const handleAddToCart = async (item: CartItemType, location: string) => {
    // If toggle to cart button on  main page
    if (location === "main") {
      try {
        // Main - if click on add to cart btn -> check cart for matching item / check if in cart already
        const findItem = cartItems.find(
          (cartItem) => Number(item.id) === Number(cartItem.storeId)
        );
        if (findItem) {
          // If item already in cart remove it from cart / Undo add to cart
          setCartItems(
            cartItems.filter((cartItem) => cartItem.storeId !== item.id)
          );
          axios.delete(
            `https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart/${findItem.id}`
          );
        } else {
          // Add new item to cart
          setCartItems([...cartItems, item]);
          // axios.post("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart", item);
          const { data } = await axios.post(
            "https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart",
            item
          );
          // give up-to-date id? mockAPI quirk?
          setCartItems((prev) =>
            prev.map((cartItem) => {
              if (cartItem.id === data.storeId) {
                return {
                  ...cartItem,
                  id: data.id,
                };
              }
              return cartItem;
            })
          );
        }
      } catch (error) {
        console.log("error when adding to cart");
        console.error(error);
      }
      // Favorites -  if toggle button in favorites page (different ids id/storeId - mockapi id quirk/nuance)
    } else {
      try {
        // In favorites click on add to cart btn -> check cart for matching item / check if in cart already
        const findItem = cartItems.find(
          (cartItem) => Number(item.storeId) === Number(cartItem.storeId)
        );
        if (findItem) {
          // If item already in cart remove it from cart / Undo add to cart
          setCartItems(
            cartItems.filter((cartItem) => cartItem.storeId !== item.storeId)
          );
          axios.delete(
            `https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart/${findItem.id}`
          );
        } else {
          // Add new item to cart
          setCartItems([...cartItems, item]);
          const { data } = await axios.post(
            "https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart",
            item
          );
          // give up-to-date id? mockAPI quirk?
          setCartItems((prev) =>
            prev.map((item) => {
              if (item.storeId === data.storeId) {
                return {
                  ...item,
                  id: data.id,
                };
              }
              return item;
            })
          );
        }
      } catch (error) {
        console.log("error when adding to cart");
        console.error(error);
      }
    }
  };

  const handleDeleteFromCartDrawer = async (id: string) => {
    try {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      axios.delete(`https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart/${id}`);
    } catch (error) {
      console.log("error when deleting from cart");
      console.error(error);
    }
  };

  const handleAddToFavorites = async (item: CartItemType, location: string) => {
    if (location === "main") {
      try {
        // In main click on add to favorites btn -> check favorites for matching item / check if in favorites already
        const findItem = favorites.find(
          (favorite) => Number(item.id) === Number(favorite.storeId)
        );
        if (findItem) {
          // If item already in favorites remove it from favorites / Undo add to favorites
          setFavorites(
            favorites.filter((favorite) => favorite.storeId !== item.id)
          );
          axios.delete(
            `https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites/${findItem.id}`
          );
        } else {
          // Add new favorite
          setFavorites([...favorites, item]);
          const { data } = await axios.post(
            "https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites",
            item
          );
          // give up-to-date id? mockAPI quirk?
          setFavorites((prev) =>
            prev.map((cartItem) => {
              if (cartItem.id === data.storeId) {
                return {
                  ...cartItem,
                  id: data.id,
                };
              }
              return cartItem;
            })
          );
        }
      } catch (error) {
        alert("error when adding to favorite");
        console.log("error when adding to favorites");
        console.error(error);
      }
    } else {
      // in favorites click favorite btn to unfavorite
      try {
        const updatedCart = favorites.filter(
          (favorite) => favorite.id !== item.id
        );
        setFavorites(updatedCart);
        axios.delete(
          `https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites/${item.id}`
        );
      } catch (error) {
        console.log("error when deleteing from favorites");
        console.error(error);
      }
    }
  };

  // Fetch data
  useEffect(() => {
    // Fetch
    // all items fetch
    // fetch("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     console.log(json);
    //     setItems(json);
    //   });

    // Axios
    // try {
    // all items fetch
    // axios
    //   .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/items")
    //   .then((res) => {
    //     setItems(res.data);
    //     setisLoadingItems(false);
    //   })
    //   .catch((error) => {
    //     alert("error fetching items");
    //     console.log(error, "error fetching items");
    //   });
    // cart fetch
    // axios
    //   .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart")
    //   .then((res) => {
    //     setCartItems(res.data);
    //   })
    //   .catch((error) => {
    //     alert("error fetching cart");
    //     console.log(error, "error fetching cart");
    //   });
    // favorites fetch
    // axios
    //   .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites")
    //   .then((res) => {
    //     setFavorites(res.data);
    //   })
    //   .catch((error) => {
    //     alert("error fetching favorites");
    //     console.log(error, "error fetching favorites";
    //   });

    const fetchAllData = async () => {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart"),
            axios.get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites"),
            axios.get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/items"),
          ]);
        setFavorites(favoritesResponse.data);
        setCartItems(cartResponse.data);
        setItems(itemsResponse.data);
        setisLoadingItems(false);
      } catch (error) {
        alert("Failed to load items");
        console.log(error);
      }
    };
    fetchAllData();
  }, []);

  // Disable main page scroll when cart drawer is open
  useEffect(() => {
    if (isCartDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // document.body.style.overflow = "unset";
      document.body.style.overflow = "overlay"; // better for padding/spacing ? prevents slider image zoom in/out when open cart drawer
    }
  }, [isCartDrawerOpen]);

  const checkFavoriteStatus = (obj: CartItemType) => {
    return favorites.some(
      (favorite: CartItemType) =>
        Number(favorite.storeId) === Number(obj.storeId)
    );
  };

  const checkInCartStatus = (obj: CartItemType, location: string) => {
    // in main page check
    if (location === "main") {
      return cartItems.some(
        (item: CartItemType) => Number(item.storeId) === Number(obj.id)
      );
    } else {
      // in favorite check
      return cartItems.some(
        (item: CartItemType) => Number(item.storeId) === Number(obj.storeId)
      );
    }
  };

  return (
    <AppContext.Provider
      value={{
        setIsCartDrawerOpen,
        isCartDrawerOpen,
        items,
        favorites,
        cartItems,
        setCartItems,
        handleAddToCart,
        handleAddToFavorites,
        handleDeleteFromCartDrawer,
        checkInCartStatus,
        isLoadingItems,
        setisLoadingItems,
        checkFavoriteStatus,
      }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/sneakers-shop-react-app/"
            element={
              <Main
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                Slider={<Slider />}
              />
            }
          ></Route>
          <Route
            path="/sneakers-shop-react-app/favorites"
            element={<Favorites />}
          ></Route>
          <Route
            path="/sneakers-shop-react-app/orders"
            element={<Orders />}
          ></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
