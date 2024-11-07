import React from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();
  const { addToCart } = React.useContext(CartContext);

  const handleViewProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("Product added to cart:", product);
  };

  return (
    <div className="product-card card">
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
            <i class="fa fa-star"></i>
            {product.rating}
          </div>
          <div className="product-price">₹{product.price}</div>
        </div>
      </div>
      <div className="product-footer">
        <button className="btn" onClick={() => addToCart(product)}>
          + Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
