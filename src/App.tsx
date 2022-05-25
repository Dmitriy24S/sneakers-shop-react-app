import axios from "axios";
import { useEffect, useState } from "react";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";

function App() {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  // Get / update cart info when open cart drawer
  useEffect(() => {
    axios
      .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart")
      .then((res) => {
        // console.log(res.data, "cart data");
        setCartItems(res.data);
      });
  }, [isCartDrawerOpen]);

  const handleAddToCart = async (item: any) => {
    // console.log(item, " item click");
    try {
      // In main click on add to cart btn -> check cart for matching item / check if in cart already
      const findItem = cartItems.find(
        (cartItem) => Number(item.id) === Number(cartItem.storeId)
      );
      if (findItem) {
        // console.log(findItem, "finditem");
        // If item already in cart remove it from cart / Undo add to cart
        setCartItems(
          cartItems.filter((cartItem) => cartItem.storeId !== item.id)
        );
        axios.delete(
          `https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart/${findItem.id}`
        );
      } else {
        // console.log("else", item);
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

  // Fetch data
  useEffect(() => {
    // Fetch
    // fetch("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     console.log(json);
    //     setItems(json);
    //   });

    // Axios
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
      {isCartDrawerOpen && (
        <Drawer
          setIsCartDrawerOpen={setIsCartDrawerOpen}
          cartItems={cartItems}
          handleDeleteFromCartDrawer={handleDeleteFromCartDrawer}
        />
      )}
      <Header setIsCartDrawerOpen={setIsCartDrawerOpen} />
      <Slider />
      <Main
        items={items}
        handleAddToCart={handleAddToCart}
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
    </div>
  );
}

export default App;
