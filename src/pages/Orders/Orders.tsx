import axios from "axios";
import { useEffect, useState } from "react";
import "./Orders.scss";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch order list on page load
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await axios.get(
          "https://628a5b65e5e5a9ad3223b0a7.mockapi.io/orders"
        );
        setOrders(ordersData.data);
      } catch (error) {
        alert("Error fetching orders");
        console.log(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <main>
      <div className="content-body-wrapper">
        <div className="top-container">
          <h1 className="section-title">Your Orders</h1>
        </div>
        <section className="items-container order-list-container">
          {/* No orders message */}
          {orders.length === 0 && (
            <article className="empty-data-message">
              <h2>No data to display</h2>
            </article>
          )}
          {/* List orders */}
          {orders?.map((item: any) => {
            let date = new Date(item.createdAt);
            let dayDate = date.toDateString();
            return (
              <article className="order" key={item.id}>
                <div className="order-header">
                  <h4 className="order-number">Order #{item.id}</h4>
                  <p className="order-price">£149.99</p>
                </div>
                <p className="order-date">{dayDate}</p>
                {/* products in order preview */}
                <div className="order-preview-img">
                  {item?.order?.map((item: any, index: number) => {
                    if (index < 3) {
                      return (
                        <div className="preview-img--wrapper" key={item.id}>
                          <img
                            src={`${process.env.PUBLIC_URL}${item.imageUrl}`}
                            alt="sneaker"
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
                  {/* after first 3 preview images show '...' instead of all products images */}
                  {item?.order?.length > 2 && (
                    <span className="extra-items-preview">...</span>
                  )}
                </div>
                {/* total products in order */}
                <p className="orders-amount">{item.order.length} items</p>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Orders;
