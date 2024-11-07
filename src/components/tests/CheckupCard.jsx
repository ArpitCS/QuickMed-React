import React from "react";

const CheckupCard = ({ test }) => {
  return (
    <div className="checkupCard col-md-3 col-sm-12">
      <div className="checkup-card">
        <div className="checkup-top">
          <div className="checkup-left">
            <p className="checkup-title">{test.name}</p>
            <p className="book-btn">Book Now →</p>
          </div>
        </div>
        <div className="checkup-right">
          <img
            src={test.icon || "default-image-url"}
            alt={test.name}
            className="checkup-image"
          />
        </div>
        <div className="checkup-bottom">
          <span className="checkup-price">
            Rs. <p>{test.price}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckupCard;
