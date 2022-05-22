import { useEffect, useState } from "react";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";

function App() {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);

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
      {isCartDrawerOpen && <Drawer setIsCartDrawerOpen={setIsCartDrawerOpen} />}
      <Header setIsCartDrawerOpen={setIsCartDrawerOpen} />
      <Slider />
      <Main />
    </div>
  );
}

export default App;
