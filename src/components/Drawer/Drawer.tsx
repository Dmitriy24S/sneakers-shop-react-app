import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";
import { useCart } from "../../hooks/useCart";
import StatusMessage from "../StatusMessage/StatusMessage";
import "./Drawer.scss";

// setIsCartDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
// type DrawerProps = {
//   handleDeleteFromCartDrawer: any;
// };

const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = () => {
  const {
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    cartItems,
    setCartItems,
    handleDeleteFromCartDrawer,
  } = useContext<any>(AppContext);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false); // disable submit button while processing
  const [isOrderComplete, setIsOrderComplete] = useState(false); // shows order info status message component
  const [orderId, setOrderId] = useState(null);
  const { totalCartPrice } = useCart();

  const handleSubmitOrder = async () => {
    try {
      setIsProcessingOrder(true);
      // create order info in the backend
      const { data } = await axios.post(
        "https://628a5b65e5e5a9ad3223b0a7.mockapi.io/orders",
        { order: cartItems, totalPrice: totalCartPrice }
      );
      setOrderId(data.id);
      // delete items from cart in backend after have created the order in the backend
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://628a5b65e5e5a9ad3223b0a7.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      console.log(error);
      alert("Failed to complete order");
    }
    setIsProcessingOrder(false); // ? finished the attempt at processing order, no longer processing order
  };

  // Trap focus in open cart drawer
  const cartDrawerRef = useRef<any>(null); // ! any ?
  const trapFocusInModal = (e: any) => {
    // ! any ?
    if (e.key !== "Tab") return;

    const focusableModalElements = cartDrawerRef.current.querySelectorAll(
      "a[href], button:not([disabled]), textarea, input, select"
    );

    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    // if going forward by pressing tab and lastElement is active shift focus to first focusable element
    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    // if going backward by pressing tab and firstElement is active shift focus to last focusable element
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  // Listen for ESC key to close cart drawer
  useEffect(() => {
    const closeCartDrawer = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", closeCartDrawer);
    return () => {
      window.removeEventListener("keydown", closeCartDrawer);
    };
  }, [setIsCartDrawerOpen]);

  return (
    <section className={`drawer ${isCartDrawerOpen && "active"}`}>
      <div
        className="drawer-overlay"
        onClick={() => setIsCartDrawerOpen(false)}
      ></div>
      <div
        className="drawer-content"
        onKeyDown={trapFocusInModal}
        ref={cartDrawerRef}
      >
        <div className="drawer-top">
          <h2>Cart</h2>
          {/* Close cart btn/svg */}
          <button
            aria-label="close cart"
            className="close-cart-btn"
            onClick={() => setIsCartDrawerOpen(false)}
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="7.5"
                fill="white"
                stroke="#DBDBDB"
              />
              <path
                d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                fill="#B5B5B5"
              />
            </svg>
          </button>
        </div>
        {/* Cart content list */}
        {cartItems.length > 0 ? (
          <>
            <section className="cart-content">
              {cartItems.map((item: any) => {
                return (
                  <article key={item.id} className="cart-item">
                    {/* info */}
                    <img
                      src={`${process.env.PUBLIC_URL}${item.imageUrl}`}
                      alt="sneaker"
                      className="item__image"
                    />
                    <div className="cart-item__info">
                      <div className="item__name">
                        <span>Men Sneakers</span>
                        <h5>{item.title}</h5>
                      </div>
                      <div className="item__price">
                        <p>£{item.price}</p>
                      </div>
                    </div>
                    <button
                      aria-label="remove from cart"
                      className="remove-cart-btn"
                      onClick={() => handleDeleteFromCartDrawer(item.id)}
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="31"
                          height="31"
                          rx="7.5"
                          fill="white"
                          stroke="#DBDBDB"
                        />
                        <path
                          d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                          fill="#B5B5B5"
                        />
                      </svg>
                    </button>
                  </article>
                );
              })}
            </section>
            {/* cart bottom */}
            <section className="cart-bottom">
              <div className="cart-total">
                Total: <div className="cart-total-divider"></div>
                <span className="cart-total-price">£{totalCartPrice}</span>
              </div>
              <button
                className="place-order-btn"
                onClick={handleSubmitOrder}
                disabled={isProcessingOrder}
              >
                {/* Place order */}
                {isProcessingOrder ? "Processing order" : " Place order"}
                {/* order btn - arrow svg */}
                <svg
                  className="place-order-btn-arrow"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H14.7143"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.71436 1L14.7144 7L8.71436 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </section>
          </>
        ) : (
          // Empty cart message / Order complete message
          <StatusMessage
            title={isOrderComplete ? "Order complete" : "Your cart is empty"}
            description={
              isOrderComplete
                ? `Your order #${orderId} has been created`
                : "Please add products to continue"
            }
            image={
              isOrderComplete ? "img/complete-order.jpg" : "img/empty-cart.jpg"
            }
          >
            <button
              aria-label="close cart drawer"
              className="return-btn"
              onClick={() => setIsCartDrawerOpen(false)}
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="return-arrow"
              >
                <path
                  d="M1 7H14.7143"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.71436 1L14.7144 7L8.71436 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Return
            </button>
          </StatusMessage>
        )}
      </div>
    </section>
  );
};

export default Drawer;
