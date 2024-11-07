import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logoFull from "../../assets/logo-full.png";

const Header = () => {
  return (
    <>
      <header>
        <div id="header">
          <div id="logo">
            <Link to="/">
              <img src={logoFull} alt="QuickMed Logo" />
            </Link>
          </div>
          <div id="searchbar">
            <input type="text" placeholder="Search products" id="searchInput" />
            <span id="searchButton">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <div id="right-header">
            <div id="cart">
              <Link to="/cart" className="d-flex align-items-center">
                <i className="fa-solid fa-cart-shopping"></i>
                <div id="amount">
                  <i className="fa-solid fa-rupee-sign">:</i>
                  <div id="cart-amount">XX,XXX</div>
                </div>
              </Link>
            </div>
            <div id="profile">
              <Link to="/dashboard">
                <i className="fa-solid fa-user"></i>
              </Link>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="fa-solid fa-house"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/store">
                    <i className="fa-solid fa-store"></i> Store
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tests">
                    <i className="fa-solid fa-syringe"></i> Tests
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/firstaid">
                    <i className="fa-solid fa-suitcase-medical"></i> First-Aid
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">
                    <i className="fa-solid fa-blog"></i> Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/nearby">
                    <i className="fa-solid fa-map-pin"></i> Nearby
                  </Link>
                </li>
              </ul>
              <div id="consult">
                <span id="consultBtn">
                  <i className="fa-solid fa-phone"></i> Consult
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div id="consultModalContainer">
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Consulting Appointment</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  id="closeBtn"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-close"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <form action="POST">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Phone"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" className="form-control" id="date" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input type="time" className="form-control" id="time" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" className="form-control" id="age" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" id="bookBtn" className="btn">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
