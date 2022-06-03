// import axios from "axios";
// import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import Card from "../../components/Card";
import { AppContextType, CartItemType } from "../../types";

const Favorites = () => {
  // Get / update favorites from backend when open favorites
  // useEffect(() => {
  //   axios
  //     .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites")
  //     .then((res) => {
  //       setFavorites(res.data);
  //     });
  // }, []);

  const { favorites } = useContext(AppContext) as AppContextType;

  return (
    <main>
      <div className="content-body-wrapper">
        <div className="top-container">
          <h1 className="section-title">Favorites</h1>
        </div>
        <section className="items-container">
          {/* No favorites message */}
          {favorites.length === 0 && (
            <article className="empty-data-message">
              <h2>No data to display</h2>
            </article>
          )}
          {/* List favorites */}
          {favorites?.map((item: CartItemType) => {
            return <Card key={item.id} item={item} location={"favorites"} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Favorites;
