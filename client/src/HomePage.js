import React from 'react';

export const HomePage = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide "
      style={{ height: "85vh" }}
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="./images/home.jpg"
            class="d-block w-100"
            alt="..."
            style={{ height: "85vh" }}
          />
        </div>
        <div class="carousel-item">
          <img
            src="./images/home2.jpg"
            class="d-block w-100"
            alt="..."
            style={{ height: "85vh" }}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          style={{ backgroundColor: "black" }}
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          style={{ backgroundColor: "black" }}
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
