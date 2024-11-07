import React from "react";

const TestPackageCard = ({ test, onViewPackage }) => {
  return (
    <div
      className="testCard col-md-3 col-sm-12"
      onClick={() => onViewPackage(test)}
    >
      <div className="test-package-card">
        <div className="test-header">
          <div className="header-left">
            <img src={test.icon} alt={test.name} />
          </div>
          <div className="header-right">
            <p>{test.name}</p>
            <p>{test.total} Tests Included</p>
          </div>
        </div>
        <div className="test-footer">
          <div className="footer-left">
            <p>₹ {test.price}</p>
          </div>
          <div className="footer-right">
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPackageCard;
