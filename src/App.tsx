import { useEffect, useState } from "react";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";

function App() {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleAddToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };

  const handleDeleteFromCart = (id: any) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // fetch data
  useEffect(() => {
    fetch("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setItems(json);
      });
  }, []);

  // disable main page scroll when cart drawer is open
  useEffect(() => {
    if (isCartDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartDrawerOpen]);

  return (
    <div className="App">
      {isCartDrawerOpen && (
        <Drawer
          setIsCartDrawerOpen={setIsCartDrawerOpen}
          cartItems={cartItems}
          handleDeleteFromCart={handleDeleteFromCart}
        />
      )}
      <Header setIsCartDrawerOpen={setIsCartDrawerOpen} />
      <Slider />
      <Main
        items={items}
        handleAddToCart={handleAddToCart}
        handleDeleteFromCart={handleDeleteFromCart}
      />
    </div>
  );
}

export default App;
