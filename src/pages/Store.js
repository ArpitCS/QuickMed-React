import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { Suspense } from "react";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import ProductCard from "../components/store/ProductCard";

import "./Store.css";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  let filters = {
    category: ["Medicines", "Supplements", "Personal Care", "Health Devices"],
    brand: [
      "Eagle",
      "Dr. Morepen",
      "Dabur",
      "Liveasy",
      "Himalaya",
      "Moov",
      "AVP",
      "Paracip",
    ],
    concern: [
      "General Care",
      "Skin Care",
      "Diabetes",
      "Heart Care",
      "Joints Care",
      "Kidney Care",
    ],
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const querySnapshot = await getDocs(collection(db, "Products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Header />

      <div id="body-header">
        <div id="expand">
          <button id="expand-btn">
            <i class="fa-solid fa-down-long" id="expand-icon"></i>
          </button>
        </div>
        <div class="sort-container">
          <span>Sort By:</span>
          <select name="sort" id="sort">
            <option value="price-asc">Price: Low To High</option>
            <option value="price-dsc">Price: High To Low</option>
            <option value="rating-asc">Rating: Low To High</option>
            <option value="rating-dsc">Rating: High To Low</option>
          </select>
        </div>
      </div>

      <div id="main-store">
        <div id="sidebar">
          <button class="noselect" id="clear-filters">
            <span class="text">Clear</span>
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
          <div class="sidebar-section">
            <h5>Categories</h5>
            <ul id="categories-list">
              {filters.category.map((category) => (
                <li class="filter">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    value={category}
                    data-filter-type="category"
                    onchange={`toggleCategory('${category}')`}
                  />
                  <label htmlFor={`category-${category}`}>{category}</label>
                </li>
              ))}
            </ul>
          </div>
          <div class="sidebar-section">
            <h5>Brands</h5>
            <ul id="brands-list">
              {filters.brand.map((brand) => (
                <li class="filter">
                  <input
                    type="checkbox"
                    id={`brand-${brand}`}
                    value={brand}
                    data-filter-type="brand"
                    onchange={`toggleBrand('${brand}')`}
                  />
                  <label htmlFor={`brand-${brand}`}>{brand}</label>
                </li>
              ))}
            </ul>
          </div>
          <div class="sidebar-section">
            <h5>Health Concerns</h5>
            <ul id="concern-list">
              {filters.concern.map((concern) => (
                <li class="filter">
                  <input
                    type="checkbox"
                    id={`concern-${concern}`}
                    value={concern}
                    data-filter-type="concern"
                    onchange={`toggleConcern('${concern}')`}
                  />
                  <label htmlFor={`concern-${concern}`}>{concern}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="productCards">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Suspense fallback={<div>Loading...</div>}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Suspense>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Store;
