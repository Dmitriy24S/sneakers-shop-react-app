import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Main from "./pages/Main/Main";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [favorites, setFavorites] = useState<any[]>([]);

  // Get / update cart info when open cart drawer
  useEffect(() => {
    axios
      .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, [isCartDrawerOpen]);

  const handleAddToCart = async (item: any) => {
    try {
      // In main click on add to cart btn -> check cart for matching item / check if in cart already
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
        axios.post("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart", item);
      }
    } catch (error) {
      console.log("error when adding to cart");
      console.error(error);
    }
  };

  const handleDeleteFromCartDrawer = (id: any) => {
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
    // all items fetch
    axios
      .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/items")
      .then((res) => {
        // console.log(res.data, "items data");
        setItems(res.data);
      });
    // cart fetch
    axios
      .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart")
      .then((res) => {
        // console.log(res.data, "cart data");
        setCartItems(res.data);
      });
    // favorites fetch
    axios
      .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites")
      .then((res) => {
        setCartItems(res.data);
      });
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

  return (
    <div className="App">
      <Header setIsCartDrawerOpen={setIsCartDrawerOpen} />
      {isCartDrawerOpen && (
        <Drawer
          setIsCartDrawerOpen={setIsCartDrawerOpen}
          cartItems={cartItems}
          handleDeleteFromCartDrawer={handleDeleteFromCartDrawer}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Main
              items={items}
              handleAddToCart={handleAddToCart}
              handleAddToFavorites={handleAddToFavorites}
              searchInputValue={searchInputValue}
              setSearchInputValue={setSearchInputValue}
              Slider={<Slider />}
            >
              <Slider />
            </Main>
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              handleAddToFavorites={handleAddToFavorites}
              handleDeleteFavoriteFromFavoritePage={
                handleDeleteFavoriteFromFavoritePage
              }
              setFavorites={setFavorites}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
