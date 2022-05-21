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
          {/* remove favorite btn */}
          <button
            aria-label="remove to favorites"
            className="remove-favorite-btn"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="7" fill="#FEF0F0" />
              <path
                d="M23.6129 11.869C23.3646 11.3076 23.0067 10.7988 22.5591 10.3712C22.1111 9.94231 21.583 9.60147 21.0033 9.36723C20.4023 9.12337 19.7577 8.99855 19.1068 9.00001C18.1938 9.00001 17.3029 9.24422 16.5288 9.70551C16.3435 9.81585 16.1676 9.93705 16.0009 10.0691C15.8342 9.93705 15.6583 9.81585 15.4731 9.70551C14.6989 9.24422 13.8081 9.00001 12.895 9.00001C12.2375 9.00001 11.6004 9.12302 10.9985 9.36723C10.4169 9.6024 9.89281 9.94067 9.44276 10.3712C8.99455 10.7983 8.63651 11.3072 8.38893 11.869C8.1315 12.4533 8 13.0738 8 13.7124C8 14.3147 8.12594 14.9424 8.37597 15.581C8.58525 16.1146 8.88529 16.6682 9.26866 17.2272C9.87614 18.1117 10.7114 19.0343 11.7486 19.9695C13.4673 21.5198 15.1693 22.5907 15.2416 22.6341L15.6805 22.9091C15.875 23.0303 16.125 23.0303 16.3195 22.9091L16.7584 22.6341C16.8306 22.5889 18.5308 21.5198 20.2514 19.9695C21.2886 19.0343 22.1238 18.1117 22.7313 17.2272C23.1147 16.6682 23.4166 16.1146 23.624 15.581C23.874 14.9424 24 14.3147 24 13.7124C24.0018 13.0738 23.8703 12.4533 23.6129 11.869V11.869Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="16"
                  y1="9"
                  x2="16"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFB0B0" />
                  <stop offset="1" stop-color="#FF4343" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          {/* info */}
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
          {/* add favorite btn */}
          <button aria-label="add to favorites" className="add-favorite-btn">
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
                rx="6.5"
                fill="white"
                stroke="#F8F8F8"
              />
              <path
                d="M21.149 11.356L21.1484 11.3554C20.8095 11.0258 20.4097 10.7636 19.9705 10.5833L19.9696 10.5829C19.5139 10.3951 19.0249 10.2989 18.5311 10.3L18.5295 10.3C17.8346 10.3 17.1584 10.4887 16.5717 10.8438L16.5717 10.8439C16.4313 10.9288 16.2985 11.0218 16.173 11.1228L15.7341 11.476L15.2953 11.1228C15.1698 11.0218 15.037 10.9288 14.8966 10.8439L14.8966 10.8438C14.3099 10.4887 13.6337 10.3 12.9388 10.3C12.4373 10.3 11.9546 10.395 11.4987 10.5829L11.498 10.5832C11.057 10.7644 10.6606 11.0243 10.3197 11.3556L10.3187 11.3566L10.3187 11.3566C9.98111 11.6834 9.71174 12.0725 9.52557 12.5016L21.149 11.356ZM21.149 11.356C21.4865 11.6835 21.7561 12.0729 21.943 12.5022C22.1365 12.9487 22.2347 13.4204 22.2333 13.9064V13.9084C22.2333 14.3625 22.1399 14.8512 21.9418 15.3651L21.9412 15.3667M21.149 11.356L21.9412 15.3667M12.3799 19.1131L12.38 19.1132C13.1291 19.7996 13.8773 20.3822 14.4475 20.7988C14.732 21.0066 14.9709 21.1721 15.1415 21.2873C15.2268 21.345 15.2948 21.3899 15.3428 21.4212C15.3857 21.4492 15.4091 21.464 15.4144 21.4673C15.4154 21.4679 15.4158 21.4682 15.4155 21.468L15.4266 21.4748L15.4266 21.4749L15.7333 21.6701L16.0401 21.4749L16.0402 21.4748C16.0914 21.4423 17.5822 20.4902 19.0868 19.1131H12.3799ZM12.3799 19.1131C11.4753 18.2845 10.7634 17.4818 10.255 16.7299M12.3799 19.1131L10.255 16.7299M21.9412 15.3667C21.7771 15.7954 21.5328 16.2542 21.2114 16.7303M21.9412 15.3667L21.2114 16.7303M10.255 16.7299C9.93467 16.2553 9.69124 15.796 9.52486 15.3651L10.255 16.7299ZM21.2114 16.7303C20.7031 17.482 19.9913 18.2845 19.087 19.1129L21.2114 16.7303ZM9.23333 13.9084C9.23333 13.4208 9.33184 12.9483 9.52554 12.5017L9.52472 15.3648C9.32672 14.851 9.23333 14.3624 9.23333 13.9084Z"
                stroke="#ECECEC"
                stroke-width="1.4"
              />
            </svg>
          </button>
          {/* info */}
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
            {/* added item */}
            <button aria-label="remove from cart" className="remove-item-btn">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="32"
                  height="32"
                  rx="8"
                  fill="url(#paint1_linear)"
                />
                <g clip-path="url(#clip0)">
                  <g filter="url(#filter0_d)">
                    <path
                      d="M19.6567 11.6207C19.8394 11.4363 20.0876 11.3318 20.3471 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0594 12.9954L15.8327 19.5294C15.7429 19.626 15.6346 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4194 19.556L10.954 16.092C10.7699 15.9078 10.6665 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9544 14.703C11.1386 14.5189 11.3885 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3434 14.7034L15.084 17.4447L19.6307 11.6514C19.639 11.6408 19.6479 11.6308 19.6574 11.6214L19.6567 11.6207Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="10.6665"
                    y="11.3298"
                    width="10.6698"
                    height="10.5132"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint1_linear"
                    x1="16"
                    y1="0"
                    x2="16"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#89F09C" />
                    <stop offset="1" stop-color="#3CC755" />
                  </linearGradient>
                  <clipPath id="clip0">
                    <rect
                      width="10.6667"
                      height="10.6667"
                      fill="white"
                      transform="translate(10.6667 10.6667)"
                    />
                  </clipPath>
                </defs>
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
