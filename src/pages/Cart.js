import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    updateCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useContext(CartContext);

  useEffect(() => {
    updateCart();
  }, [cart]);

  const shippingAmount = 500;
  const taxRate = 0.18; // 18%
  const discountRate = 0.05; // 5%

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxAmount = subtotal * taxRate;
  const discountAmount = subtotal * discountRate;
  const total = subtotal + shippingAmount + taxAmount - discountAmount;

  return (
    <>
      <Header />
      <div id="main-cart">
        <div id="cart-container">
          <div id="cart-items">
            {cart.map((item) => (
              <div className="cart-item col-12" key={item.id}>
                <div className="cart-remove">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    <i className="fa-solid fa-close"></i>
                  </button>
                </div>
                <div className="cart-title">
                  <img
                    src={item.image || "../assets/testsIcon.png"}
                    alt={item.name}
                  />
                  <div>
                    <p>{item.name}</p>
                  </div>
                </div>
                <div className="cart-price">
                  <p className="tag">Price: </p>
                  <p>₹{item.price.toFixed(2)}</p>
                </div>
                <div className="cart-quantity">
                  <p className="tag">Quantity: </p>
                  <div>
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="btn"
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-net-price">
                  <p className="tag">Net Price: </p>
                  <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="cart-total">
          <div className="total-header">
            <h3>Cart Summary</h3>
          </div>
          <div className="total-body">
            <div className="total-item">
              <span>Subtotal</span>
              <span id="subtotal">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="total-item">
              <span>Shipping</span>
              <span id="shipping">₹{shippingAmount}</span>
            </div>
            <div className="total-item">
              <span>Tax</span>
              <span id="tax">₹{taxAmount.toFixed(2)}</span>
            </div>
            <div className="total-item">
              <span>Discount</span>
              <span id="discount">₹{discountAmount.toFixed(2)}</span>
            </div>
            <hr />
            <div className="cart-total-item">
              <span>Total: </span>
              <span id="totalPrice">₹{total.toFixed(2)}</span>
            </div>
          </div>
          <div className="total-footer">
            <Link
              className="btn btn-primary"
              id="checkoutBtn"
              to="/checkout"
            >
              Checkout
            </Link>
            <button
              type="button"
              id="clearBtn"
              className="btn"
              onClick={clearCart}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
