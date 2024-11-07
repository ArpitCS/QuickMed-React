import React, { useState } from "react";
import TestCard from "../components/tests/TestCard";
import TestPackageCard from "../components/tests/TestPackageCard";
import CheckupCard from "../components/tests/CheckupCard";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import "./Tests.css";
import { regularTests, testPackages, healthCheckups } from "./testData";

const Tests = () => {
  const [selectedTests, setSelectedTests] = useState(new Set());
  const [showPackageView, setShowPackageView] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const toggleTestSelection = (testId) => {
    const newSelected = new Set(selectedTests);
    if (newSelected.has(testId)) {
      newSelected.delete(testId);
    } else {
      newSelected.add(testId);
    }
    setSelectedTests(newSelected);
  };

  const getTotalPrice = () => {
    return Array.from(selectedTests).reduce((sum, testId) => {
      const test = regularTests.find((t) => t.id === testId);
      return sum + test.price;
    }, 0);
  };

  const viewTestPackage = (test) => {
    setSelectedPackage(test);
    setShowPackageView(true);
  };

  if (showPackageView && selectedPackage) {
    return (
      <div id="test-package-view">
        <div className="view-header row">
          <span>
            <a onClick={() => setShowPackageView(false)}>
              <i className="fa fa-arrow-left"></i> Back to Store
            </a>
          </span>
        </div>
        {/* Rest of your package view HTML */}
      </div>
    );
  }

  return (
    <>
      <Header />

      <div id="main-container">
        <div id="test-banner"></div>
        <div id="tests-container">
          <h2 className="test-h2">Recommended Health Checks</h2>
          <div id="regular-checks-container" className="row">
            {selectedTests.size > 0 && (
              <div id="order-summary" className="order-summary">
                <div className="summary-content mb-3">
                  <div>
                    <span>
                      <span className="selected-count">
                        {selectedTests.size}
                      </span>{" "}
                      tests selected
                    </span>
                    <br />
                    <span>
                      Total:{" "}
                      <span className="total-price">₹{getTotalPrice()}</span>
                    </span>
                  </div>
                  <button
                    onClick={() => (window.location.href = "checkout.html")}
                    className="checkout-button"
                  >
                    Book Selected Tests
                  </button>
                </div>
              </div>
            )}
            <div className="regular-checks-collection row">
              {regularTests.map((test) => (
                <TestCard
                  key={test.id}
                  test={test}
                  onSelect={toggleTestSelection}
                  isSelected={selectedTests.has(test.id)}
                />
              ))}
            </div>
          </div>

          <h2 className="test-h2">Top Test Packages</h2>
          <div id="test-packages-container" className="row">
            {testPackages.map((test) => (
              <TestPackageCard
                key={test.id}
                test={test}
                onViewPackage={viewTestPackage}
              />
            ))}
          </div>

          <h2 className="test-h2">Health Checkup Plans</h2>
          <div id="health-checkups-container" className="row">
            {healthCheckups.map((test) => (
              <CheckupCard key={test.id} test={test} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Tests;
