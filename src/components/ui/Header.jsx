import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import "./Header.css";

import logoFull from "../../assets/logo-full.png";
import consultImage from "../../assets/consult-image.png";

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { amount, fetchCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSearch = () => {
    navigate(`/store?search=${encodeURIComponent(searchQuery)}`);
  };

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
            {window.location.pathname === "/store" && (
              <>
                <input
                  type="text"
                  placeholder="Search products"
                  id="searchInput"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span id="searchButton" onClick={handleSearch}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </>
            )}
          </div>
          <div id="right-header">
            <div id="cart">
              <Link to="/cart" className="d-flex align-items-center">
                <i className="fa-solid fa-cart-shopping"></i>
                <div id="amount">
                  <i className="fa-solid fa-rupee-sign">:</i>
                  <div id="cart-amount">{amount.toLocaleString()}</div>
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
                <span id="consultBtn" onClick={openModal}>
                  <i className="fa-solid fa-phone"></i> Consult
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Modal show={isModalOpen} onHide={closeModal} className="consult-modal">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body closeButton>
          <div className="consult-left">
            <img
              src={consultImage}
              alt="Consult Image"
              className="consult-image"
            />
            <h1>Online Doctor</h1>
            <h2>CONSULTATION</h2>
          </div>
          <div className="consult-right">
            <Form className="consult-form">
              <Form.Group controlId="name" className="form-group">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group controlId="email" className="form-group">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group controlId="phone" className="form-group">
                <Form.Label>Phone:</Form.Label>
                <Form.Control type="tel" placeholder="Enter Phone" />
              </Form.Group>
              <Form.Group controlId="date" className="form-group">
                <Form.Label>Date:</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group controlId="time" className="form-group">
                <Form.Label>Time:</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
              <Form.Group controlId="age" className="form-group">
                <Form.Label>Age:</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group controlId="address" className="form-group">
                <Form.Label>Address:</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Button className="btn-submit" variant="" onClick={closeModal}>
              Book Appointment
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;