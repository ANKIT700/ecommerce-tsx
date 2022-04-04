import * as React from "react";
import { FunctionComponent } from "react";
import "../../styles/dashboard/dashboard.styles.css";
import clothes from "../../img/adidas.jpg";
import watches from "../../img/watches.jpg";
import phone from "../../img/phones.jpg";
import ProductDetail from "../product/product.component";

export interface IDashboardProps {}

const Dashboard: FunctionComponent<IDashboardProps> = (props) => {
  return (
    <div className="container-fluid p-0 dashboard-main">
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={clothes}
              className="d-block w-100 img-fluid carousel"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={watches}
              className="d-block w-100 img-fluid carousel"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={phone}
              className="d-block w-100 img-fluid carousel"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <ProductDetail/>
    </div>
  );
};

export default Dashboard;
