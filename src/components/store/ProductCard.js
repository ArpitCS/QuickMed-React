import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import AlertLabel from "./AlertLabel";

const ProductCard = ({ product }) => {
  const [buttonContent, setButtonContent] = useState("+ Add To Cart");
  const [cartState, setCartState] = useState(false);

  const navigate = useNavigate();
  const { addToCart } = React.useContext(CartContext);

  const handleViewProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("Product added to cart:", product);
    setButtonContent("Added To Cart");
    setTimeout(() => { setButtonContent("+ Add To Cart"); }, 3000);
    handleCartState();
  };

  const handleCartState = () => {
    setCartState(true);
    setTimeout(() => { setCartState(false); }, 3000);
  };



  return (
    <>
      <div className="product-card">
        <div className="product-image" onClick={handleViewProduct}>
          <img loading="lazy" src={product.image} alt={product.name} />
        </div>
        <div className="product-body">
          <div className="product-info-left">
            <div className="product-categories">
              {product.categories.join(", ")}
            </div>
            <div className="product-title" onClick={handleViewProduct}>
              {product.name}
            </div>
            <div className="product-brand">by {product.brand}</div>
          </div>
          <div className="product-info-right">
            <div className="product-rating">
              <i className="fa fa-star"></i>
              {product.rating}
            </div>
            <div className="product-price">₹{product.price}</div>
          </div>
        </div>
        <div className="product-footer">
          <button className={`btn cart-${cartState}`} onClick={() => handleAddToCart(product)}>
            {buttonContent}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
