import React from "react";
import "./Drawer.scss";

type DrawerProps = {
  setIsCartDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: any;
  handleDeleteFromCartDrawer: any;
};

const Drawer = ({
  setIsCartDrawerOpen,
  cartItems,
  handleDeleteFromCartDrawer,
}: DrawerProps) => {
  return (
    <section className="drawer">
      <div
        className="drawer-overlay"
        onClick={() => setIsCartDrawerOpen(false)}
      ></div>
      <div className="drawer-content">
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
        {/* cart content list */}
        {cartItems.length ? (
          <>
            <section className="cart-content">
              {cartItems.map((item: any, index: number) => {
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
                <span className="cart-total-price">£199.99</span>
              </div>
              <button className="place-order-btn">
                Place order
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
          <article className="empty-cart-message">
            <h2>Cart is empty</h2>
          </article>
        )}
      </div>
    </section>
  );
};

export default Drawer;
