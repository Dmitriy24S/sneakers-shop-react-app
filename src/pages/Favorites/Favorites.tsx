import axios from "axios";
import { useEffect } from "react";
import Card from "../../components/Card";

const Favorites = ({
  handleDeleteFavoriteFromFavoritePage,
  handleAddToCart,
  favorites,
  setFavorites,
  checkFavoriteStatus,
}: any) => {
  // Get / update favorites from backend when open favorites
  useEffect(() => {
    axios
      .get("https://628a5b65e5e5a9ad3223b0a7.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

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
          {favorites?.map((item: any) => {
            return (
              <Card
                key={item.id}
                item={item}
                handleAddToCart={handleAddToCart}
                handleAddToFavorites={handleDeleteFavoriteFromFavoritePage}
                favorited={true}
                checkFavoriteStatus={checkFavoriteStatus}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Favorites;
