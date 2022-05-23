import Card from "../Card";
import "./Main.scss";

const Main = ({ items, handleAddToCart, handleDeleteFromCart }: any) => {
  return (
    <main>
      <div className="top-container">
        <h1 className="section-title">All sneakers</h1>
        <div className="search-container">
          <label htmlFor="search">
            <img
              src={`${process.env.PUBLIC_URL}/img/search.svg`}
              alt=""
              className="search-icon"
            />
          </label>
          <input
            placeholder="Search..."
            autoComplete="off"
            type="search"
            name="search"
            id="search"
            className="search-items-input"
          />
        </div>
      </div>

      <section className="items-container">
        {items.length === 0 && (
          <article className="empty-data-message">
            <h2>No data to display</h2>
          </article>
        )}
        {items?.map((item: any, index: number) => {
          return (
            <Card
              key={index}
              item={item}
              handleAddToCart={handleAddToCart}
              handleDeleteFromCart={handleDeleteFromCart}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Main;
