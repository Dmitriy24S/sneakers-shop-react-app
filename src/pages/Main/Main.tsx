import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import debounce from "lodash.debounce";
import Card from "../../components/Card";
import "./Main.scss";

const Main = ({
  handleAddToCart,
  searchInputValue,
  setSearchInputValue,
  handleAddToFavorites,
  Slider,
  checkFavoriteStatus,
}: any) => {
  const { items, checkInCartStatus } = useContext<any>(AppContext);
  const [searchedItems, setSearchedItems] = useState(items);

  const handleSearch = (text: string) => {
    // if no input text, show all
    if (!text) {
      setSearchedItems(items);
      return;
    }
    // filter shown items
    setSearchedItems(
      items.filter((item: any) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const debouncedSearch = debounce((value) => {
    setSearchInputValue(value);
    console.log("====>", value);
    handleSearch(value);
  }, 400);

  // On load create fitlered data array, map over it to show search results when it updates
  useEffect(() => {
    setSearchedItems(items);
  }, [items]);

  return (
    <main>
      {/* Slider */}
      {Slider}
      {/* Title / search */}
      <div className="content-body-wrapper">
        <div className="top-container">
          <h1 className="section-title">
            {searchInputValue
              ? `Search result for: ${searchInputValue} (${searchedItems.length})`
              : "All sneakers"}
          </h1>
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
              // value={searchInputValue}
              onChange={(e) => {
                debouncedSearch(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Products list */}
        <section className="items-container">
          {searchedItems.length === 0 && (
            <article className="empty-data-message">
              <h2>No data to display</h2>
            </article>
          )}
          {searchedItems?.map((item: any) => {
            return (
              <Card
                key={item.id}
                item={item}
                handleAddToCart={handleAddToCart}
                handleAddToFavorites={handleAddToFavorites}
                checkFavoriteStatus={checkFavoriteStatus}
                checkInCartStatus={checkInCartStatus}
                location={"main"}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Main;
