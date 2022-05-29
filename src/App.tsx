import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Main from "./pages/Main/Main";
import Favorites from "./pages/Favorites/Favorites";

export const AppContext = createContext({});

function App() {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [favorites, setFavorites] = useState<any[]>([]);
  const [isLoadingItems, setisLoadingItems] = useState(true);

  // Get / update cart info when open cart drawer
  // useEffect(() => {
  //   axios
  //     .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart")
  //     .then((res) => {
  //       setCartItems(res.data);
  //     });
  // }, [isCartDrawerOpen]);

  const handleAddToCart = async (item: any, location: string) => {
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

  const handleDeleteFromCartDrawer = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    axios.delete(`https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart/${id}`);
  };

  const handleDeleteFavoriteFromFavoritePage = async (favorite: any) => {
    try {
      const updatedCart = favorites.filter((item) => item.id !== favorite.id);
      setFavorites(updatedCart);
      axios.delete(
        `https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites/${favorite.id}`
      );
    } catch (error) {
      console.log("error when deleteing from favorites");
      console.error(error);
    }
  };

  const handleAddToFavorites = async (item: any) => {
    try {
      // In main click on add to cart btn -> check cart for matching item / check if in cart already
      const findItem = favorites.find(
        (favorite) => Number(item.id) === Number(favorite.storeId)
      );
      if (findItem) {
        // If item already in cart remove it from cart / Undo add to cart
        setFavorites(
          favorites.filter((favorite) => favorite.storeId !== item.id)
        );
        axios.delete(
          `https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites/${findItem.id}`
        );
      } else {
        // Add new item to cart
        setFavorites([...favorites, item]);
        axios.post(
          "https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites",
          item
        );
      }
    } catch (error) {
      alert("error when adding to favorite");
      console.log("error when adding to favorites");
      console.error(error);
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

  const checkFavoriteStatusInMain = (id: string) => {
    return favorites.some(
      (favorite: any) => Number(favorite.storeId) === Number(id)
    );
  };

  const checkFavoriteStatusInFavorites = (id: string) => {
    return favorites.some(
      (favorite: any) => Number(favorite.id) === Number(id)
    );
  };

  // const checkInCartStatus = (id: string, location: string) => {
  const checkInCartStatus = (obj: any, location: string) => {
    // in main page check
    if (location === "main") {
      return cartItems.some(
        (item: any) => Number(item.storeId) === Number(obj.id)
      );
    } else {
      // in favorite check
      return cartItems.some(
        (item: any) => Number(item.storeId) === Number(obj.storeId)
      );
    }
  };

  return (
    <AppContext.Provider
      value={{
        setIsCartDrawerOpen,
        items,
        favorites,
        cartItems,
        setCartItems,
        handleAddToCart,
        checkInCartStatus,
        isLoadingItems,
        setisLoadingItems,
      }}
    >
      <div className="App">
        <Header />
        {isCartDrawerOpen && (
          <Drawer handleDeleteFromCartDrawer={handleDeleteFromCartDrawer} />
        )}
        <Routes>
          <Route
            path="/sneakers-shop-react-app/"
            element={
              <Main
                handleAddToCart={handleAddToCart}
                handleAddToFavorites={handleAddToFavorites}
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                checkFavoriteStatus={checkFavoriteStatusInMain}
                Slider={<Slider />}
              />
            }
          ></Route>
          <Route
            path="/sneakers-shop-react-app/favorites"
            element={
              <Favorites
                handleDeleteFavoriteFromFavoritePage={
                  handleDeleteFavoriteFromFavoritePage
                }
                checkFavoriteStatus={checkFavoriteStatusInFavorites}
              />
            }
          ></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
