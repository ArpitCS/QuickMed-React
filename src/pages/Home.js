import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

import PopularProducts from "../components/store/PopularProducts";

import banner1 from "../assets/carousel/1.png";
import banner2 from "../assets/carousel/2.png";
import banner3 from "../assets/carousel/3.png";
import banner4 from "../assets/carousel/4.png";

import diabetes from "../assets/concerns/diabetes.jpg";
import heartcare from "../assets/concerns/heartcare.jpg";
import bones from "../assets/concerns/bones.jpeg";
import kidney from "../assets/concerns/kidney.jpg";
import derma from "../assets/concerns/derma.jpg";

import himalaya from "../assets/brands/himalaya.webp";
import aimil from "../assets/brands/aimil.webp";
import avp from "../assets/brands/avp.webp";
import dabur from "../assets/brands/dabur.webp";
import morepen from "../assets/brands/morepen.webp";

import johnDoe from "../assets/avatars/john-doe.jpg";
import janeDoe from "../assets/avatars/jane-doe.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <div id="main">
        <div id="banner">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={banner1} className="d-block w-100" alt="Image 1" />
              </div>
              <div className="carousel-item">
                <img src={banner2} className="d-block w-100" alt="Image 2" />
              </div>
              <div className="carousel-item">
                <img src={banner3} className="d-block w-100" alt="Image 3" />
              </div>
              <div className="carousel-item">
                <img src={banner4} className="d-block w-100" alt="Image 4" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
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
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div id="subBanner">
          <div id="prescription">
            <div id="dropbox">
              <h4>Order Using Prescription</h4>
              <p>Files Supported: .jpg, .png, .pdf</p>
              <p>Size Limit is 15MB</p>
              <label htmlFor="fileID"></label>
              <input type="file" accept=".jpg, .png,.pdf" id="fileID" />
            </div>
            <div>
              <button className="btn">Order Now</button>
            </div>
          </div>
          <div id="consultCard">
            <h4>Don't have a Prescription?</h4>
            <p>Book an appointment with our doctors for a consultation.</p>
            <button id="consultBtn2">Consult Now</button>
          </div>
        </div>

        <div id="content">
          <div id="features">
            <Link to="/store">
              <div className="feature-card">
                <i className="fa-solid fa-prescription"></i>
                <h3>Order Medicines</h3>
                <p>Order medicines from the comfort of your home.</p>
              </div>
            </Link>
            <Link to="/tests">
              <div className="feature-card">
                <i className="fa-solid fa-syringe"></i>
                <h3>Book Lab Tests</h3>
                <p>Book lab tests and get results online.</p>
              </div>
            </Link>
            <Link to="/firstaid">
              <div className="feature-card">
                <i className="fa-solid fa-first-aid"></i>
                <h3>First-Aid</h3>
                <p>Get first-aid tips and tutorials.</p>
              </div>
            </Link>
            <Link to="/blogs">
              <div className="feature-card">
                <i className="fa-solid fa-blog"></i>
                <h3>Blogs</h3>
                <p>Read blogs and articles on health and medicine.</p>
              </div>
            </Link>
          </div>

          <div id="how-to">
            <h2>How to Order?</h2>
            <div className="steps">
              <div className="step">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Add to Cart</p>
              </div>
              <div className="step">
                <i className="fa-solid fa-prescription"></i>
                <p>Upload Prescription</p>
              </div>
              <div className="step">
                <i className="fa-solid fa-credit-card"></i>
                <p>Pay Online</p>
              </div>
              <div className="step">
                <i className="fa-solid fa-truck"></i>
                <p>Get Delivered</p>
              </div>
            </div>
          </div>
        </div>

        <div id="popular-products">
          <div id="popular-header">
            <h2>Popular Products</h2>
            <a href="html/store.html">View All</a>
          </div>
          <PopularProducts />
        </div>
      </div>

      <div id="orderby">
        <div id="concern">
          <h2>Browse by Health Concerns</h2>
          <div className="itemCards" id="concerns-container">
            <div className="itemCard" value="Diabetes" filter-type="concerns">
              <img src={diabetes} alt="" />
              <p>Diabetes</p>
            </div>
            <div className="itemCard" value="Heart Care" filter-type="concerns">
              <img src={heartcare} alt="" />
              <p>Heart Care</p>
            </div>
            <div
              className="itemCard"
              value="Joints Care"
              filter-type="concerns"
            >
              <img src={bones} alt="" />
              <p>Bone, Joint & Muscle Care</p>
            </div>
            <div
              className="itemCard"
              value="Kidney Care"
              filter-type="concerns"
            >
              <img src={kidney} alt="" />
              <p>Kidney Care</p>
            </div>
            <div className="itemCard" value="Skin Care" filter-type="concerns">
              <img src={derma} alt="" />
              <p>Derma Care</p>
            </div>
          </div>
        </div>
        <div id="brand">
          <h2>Browse by Brands</h2>
          <div className="itemCards" id="brands-container">
            <div className="itemCard" value="Himalaya" filter-type="brand">
              <img src={himalaya} alt="" />
            </div>
            <div className="itemCard" value="Aimil" filter-type="brand">
              <img src={aimil} alt="" />
            </div>
            <div className="itemCard" value="AVP" filter-type="brand">
              <img src={avp} alt="" />
            </div>
            <div className="itemCard" value="Dabur" filter-type="brand">
              <img src={dabur} alt="" />
            </div>
            <div className="itemCard" value="Dr. Morepen" filter-type="brand">
              <img src={morepen} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="testimonies">
        <h2>Testimonies</h2>
        <div className="testimony">
          <div className="testimony-image">
            <img src={johnDoe} alt="John Doe" />
          </div>
          <div className="testimony-body">
            <p>
              "QuickMed has been a lifesaver! I can easily order my medications
              online and have them delivered right to my doorstep. The website
              is user-friendly, and the customer service is exceptional. Highly
              recommended!"
            </p>
            <p>- John Doe</p>
          </div>
        </div>
        <div className="testimony">
          <div className="testimony-image">
            <img src={janeDoe} alt="Jane Doe" />
          </div>
          <div className="testimony-body">
            <p>
              "I was impressed with the quality of the online consultation
              service. The doctors were very knowledgeable and helpful. I felt
              comfortable sharing my health concerns with them. I would
              definitely recommend QuickMed to anyone looking for reliable
              medical services."
            </p>
            <p>- Jane Doe</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
