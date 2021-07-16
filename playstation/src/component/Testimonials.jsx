import React, { Component } from "react";
import logo from '../logo.svg';

class Testiomnials extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <h1
            className="text-center"
            style={{
              fontFamily: "sans-serif",
              fontSize: "3.5rem",
              marginTop: "150px",
            }}
          >
            الابطال
          </h1>
        </div>

        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
          style={{ marginTop: "50px" }}
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 100"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={logo} class="d-block w-100" height="300" width="200" />
              <div class="carousel-caption ">
                <h5
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "2rem",
                    marginTop: "150px",
                  }}
                >
                  الاسم
                </h5>
                <p style={{
                    fontFamily: "sans-serif",
                    fontSize: "1.5rem",
                  }}>الفائز الاول</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={logo} class="d-block w-100" height="300" width="200" />
              <div class="carousel-caption ">
                <h5
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "2rem",
                    marginTop: "150px",
                  }}
                >
                  الاسم
                </h5>
                <p style={{
                    fontFamily: "sans-serif",
                    fontSize: "1.5rem",
                  }}>الفائز التانى</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={logo} class="d-block w-100" height="300" width="200" />
              <div class="carousel-caption ">
                <h5
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "2rem",
                    marginTop: "150px",
                  }}
                >
                  الاسم
                </h5>
                <p style={{
                    fontFamily: "sans-serif",
                    fontSize: "1.5rem",
                  }}>الفائز التالت</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Testiomnials;
