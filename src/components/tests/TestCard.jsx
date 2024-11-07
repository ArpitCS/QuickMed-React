import React from "react";

const TestCard = ({ test, onSelect, isSelected }) => {
  return (
    <div className="testCard col-md-3 col-sm-12">
      <div
        className={`regular-test-card ${isSelected ? "selected" : ""}`}
        data-id={test.id}
        onClick={() => onSelect(test.id)}
      >
        <div className="regular-left">
          <img src={test.icon} alt={test.name} className="regular-icon" />
        </div>
        <div className="regular-right">
          <p>{test.name}</p>
          <p>₹ {test.price}</p>
          <div className="select-indicator">✓</div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
