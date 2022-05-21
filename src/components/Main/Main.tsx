import "./Main.scss";

const Main = () => {
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
        {/* Card 1 */}
        <article className="item-card">
          <img
            src={`${process.env.PUBLIC_URL}/img/sneakers/1.jpg`}
            alt="sneaker"
            className="item__image"
          />
          <div className="item__name">
            <span>Men Sneakers</span>
            <h5>Nike Blazer Mid Suede</h5>
          </div>
          <div className="item__bottom-info-container">
            <div className="item__price">
              <span>Price:</span>
              <b>£45.99</b>
            </div>
            <button aria-label="add to cart" className="add-item-btn">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
                  fill="#D3D3D3"
                />
              </svg>
            </button>
          </div>
        </article>
        {/* Card 2 */}
        <article className="item-card">
          <img
            src={`${process.env.PUBLIC_URL}/img/sneakers/2.jpg`}
            alt="sneaker"
            className="item__image"
          />
          <div className="item__name">
            <span>Men Sneakers</span>
            <h5>Nike Blazer Mid Suede</h5>
          </div>
          <div className="item__bottom-info-container">
            <div className="item__price">
              <span>Price:</span>
              <b>£45.99</b>
            </div>
            <button aria-label="add to cart" className="add-item-btn">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
                  fill="#D3D3D3"
                />
              </svg>
            </button>
          </div>
        </article>
        {/* Card 3 */}
        <article className="item-card">
          <img
            src={`${process.env.PUBLIC_URL}/img/sneakers/3.jpg`}
            alt="sneaker"
            className="item__image"
          />
          <div className="item__name">
            <span>Men Sneakers</span>
            <h5>Nike Blazer Mid Suede</h5>
          </div>
          <div className="item__bottom-info-container">
            <div className="item__price">
              <span>Price:</span>
              <b>£45.99</b>
            </div>
            <button aria-label="add to cart" className="add-item-btn">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
                  fill="#D3D3D3"
                />
              </svg>
            </button>
          </div>
        </article>
        {/* Card 4 */}
        <article className="item-card">
          <img
            src={`${process.env.PUBLIC_URL}/img/sneakers/4.jpg`}
            alt="sneaker"
            className="item__image"
          />
          <div className="item__name">
            <span>Men Sneakers</span>
            <h5>Nike Blazer Mid Suede</h5>
          </div>

          <div className="item__bottom-info-container">
            <div className="item__price">
              <span>Price:</span>
              <b>£45.99</b>
            </div>
            <button aria-label="add to cart" className="add-item-btn">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z"
                  fill="#D3D3D3"
                />
              </svg>
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
