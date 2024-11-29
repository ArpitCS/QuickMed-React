import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

import "./Checkout.css";

const Checkout = () => {
  const {
    cart,
    amount,
    clearCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);
  const [cartExpanded, setCartExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingAmount, setShippingAmount] = useState(0);

  useEffect(() => {
    setShippingAmount(shippingMethod === "express" ? 100 : 0);
  }, [shippingMethod]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    clearCart();
  };

  const totalAmount = amount + shippingAmount;

  return (
    <div id="checkout-module">
      <Header />
      <div id="shipping-container" className="row">
        <div className="shipping-left col-md-6 col-sm-12">
          <form id="shipping-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email*:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="form-info">
                You can create an account after checkout.
              </p>
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="first-name">First Name*:</label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                placeholder="Enter First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name*:</label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Enter Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address*:</label>
              <textarea
                className="form-control"
                id="address"
                placeholder="Enter Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City*:</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State*:</label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Enter State"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country*:</label>
              <input
                type="text"
                className="form-control"
                id="country"
                placeholder="Enter Country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip*:</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder="Enter Zip"
                required
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone-no">Phone Number*:</label>
              <input
                type="tel"
                className="form-control"
                id="phone-no"
                placeholder="Enter Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group table-form-group">
              <hr />
              <p>SHIPPING METHODS</p>
              <table className="shipping-method-table">
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        name="shipping"
                        id="shipping-standard"
                        value="standard"
                        checked={shippingMethod === "standard"}
                        onChange={() => setShippingMethod("standard")}
                      />
                    </td>
                    <td>
                      <label htmlFor="shipping-standard">
                        Standard Shipping
                      </label>
                    </td>
                    <td>
                      <p>Rs. 0</p>
                    </td>
                    <td>
                      <p>5-7 Business Days</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="radio"
                        name="shipping"
                        id="shipping-express"
                        value="express"
                        checked={shippingMethod === "express"}
                        onChange={() => setShippingMethod("express")}
                      />
                    </td>
                    <td>
                      <label htmlFor="shipping-express">Express Shipping</label>
                    </td>
                    <td>
                      <p>Rs. 100</p>
                    </td>
                    <td>
                      <p>2-3 Business Days</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="form-group payment-methods-container">
              <p>PAYMENT METHODS</p>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id="payment-cod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label htmlFor="payment-cod">Cash on Delivery</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id="payment-card"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <label htmlFor="payment-card">Online Payment</label>
              </div>
            </div>
            <div className="total-footer">
              <button className="btn btn-primary" type="submit">
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>

        <div className="shipping-right col-md-6 col-sm-12">
          <div id="cart-summary">
            <div id="cart-total">
              <div className="total-header">
                <h5>
                  <strong>ORDER SUMMARY</strong>
                </h5>
              </div>
              <div className="total-body">
                <div className="total-item">
                  <span>Subtotal</span>
                  <span id="subtotal">Rs.{amount.toFixed(2)}</span>
                </div>
                <div className="total-item">
                  <span>Shipping</span>
                  <span id="shipping">Rs.{shippingAmount.toFixed(2)}</span>
                </div>
                <div className="total-item">
                  <span>Tax</span>
                  <span id="tax">Rs.{(amount * 0.18).toFixed(2)}</span>
                </div>
                <div className="total-item">
                  <span>Discount</span>
                  <span id="discount">Rs.{(amount * 0.05).toFixed(2)}</span>
                </div>
                <hr />
                <div className="cart-total-item">
                  <span>Total: </span>
                  <span id="totalPrice">
                    Rs.
                    {(totalAmount + amount * 0.18 - amount * 0.05).toFixed(2)}
                  </span>
                </div>
              </div>
              <hr />
              <div className="carts-header">
                <p id="cart-count">{cart.length} Items in Cart</p>
                <button
                  id="cart-expand-btn"
                  onClick={() => setCartExpanded((prev) => !prev)}
                >
                  <span>{cartExpanded ? "↑" : "↓"}</span>
                </button>
              </div>
              {cartExpanded && (
                <div id="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-btn"
                      >
                        <i className="fa-solid fa-close"></i>
                      </button>
                      <div className="left">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="right">
                        <div className="top">
                          <span>{item.name}</span>
                          <span>₹{item.price}</span>
                        </div>
                        <div className="bottom">
                          <button
                            className="qty-btn"
                            onClick={() => incrementQuantity(item.id)}
                          >
                            +
                          </button>
                          <span className="qty">{item.quantity}</span>
                          <button
                            className="qty-btn"
                            onClick={() => decrementQuantity(item.id)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
