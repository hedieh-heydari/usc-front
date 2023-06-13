import { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./handle/coreapicalls";
import "../styles.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadAllProducts();
  }, []);
  return (
    <Base>
      <div id="coffeeSlider" class="carousel slide" data-bs-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol class="carousel-indicators">
          <li
            data-bs-target="#coffeeSlider"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li data-bs-target="#coffeeSlider" data-bs-slide-to="1"></li>
          <li data-bs-target="#coffeeSlider" data-bs-slide-to="2"></li>
        </ol>

        {/* <!-- Slides --> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            {/* <img src="path/to/slide1.jpg" class="d-block w-100" alt="Slide 1"/> */}
            <img
              src="https://plus.unsplash.com/premium_photo-1675281834892-03f3822733e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              class="d-block w-100"
              alt="Slide 1"
              height={300}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
              class="d-block w-100"
              alt="Slide 2"
              height={300}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1498653893439-4a6b2ed3b9ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              class="d-block w-100"
              alt="Slide 3"
              height={300}
            />
          </div>
        </div>

        {/* <!-- Controls --> */}
        <a
          class="carousel-control-prev"
          href="#coffeeSlider"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#coffeeSlider"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>

      {/* <div class="row mt-4">
          <div class="col-md-4">
            <div class="card">
              <img
                src="path/to/image1.jpg"
                class="card-img-top"
                alt="Image 1"
              />
              <div class="card-body">
                <h5 class="card-title">محصول ۱</h5>
                <p class="card-text">۱۰,۹۹۹ تومان</p>
              </div>
              <div className="w-100 d-flex justify-content-end align-items-center px-2">

                <button class="btn btn-outline-success ms-1"> <TbShoppingCartPlus/>  </button>
                <button class="btn btn-outline-danger ">
                <TbShoppingCartX/>
                </button>
              </div>
            </div>
          </div>
      </div> */}

      <div className="row mt-4">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </Base>
  );
}
