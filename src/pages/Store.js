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
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedSort, setSelectedSort] = useState(
    localStorage.getItem("selectedSort") || "price-asc"
  );
  const [selectedFilters, setSelectedFilters] = useState(
    JSON.parse(localStorage.getItem("selectedFilters")) || {
      category: [],
      brand: [],
      concern: [],
    }
  );
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filters = {
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

  // Load filters and sort preference from localStorage on mount
  useEffect(() => {
    const storedFilters = localStorage.getItem("selectedFilters");
    const storedSort = localStorage.getItem("selectedSort");

    if (storedFilters) {
      setSelectedFilters(JSON.parse(storedFilters));
    }
    if (storedSort) {
      setSelectedSort(storedSort);
    }
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let updatedProducts = [...products];

    // Apply filters
    updatedProducts = updatedProducts.filter((product) => {
      const matchesCategory =
        selectedFilters.category.length === 0 ||
        selectedFilters.category.some((cat) =>
          product.categories.includes(cat)
        );

      const matchesBrand =
        selectedFilters.brand.length === 0 ||
        selectedFilters.brand.includes(product.brand);

      const matchesConcern =
        selectedFilters.concern.length === 0 ||
        selectedFilters.concern.some((concern) =>
          product.categories.includes(concern)
        );

      return matchesCategory && matchesBrand && matchesConcern;
    });

    // Apply search query
    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    updatedProducts.sort((a, b) => {
      switch (selectedSort) {
        case "price-asc":
          return a.price - b.price;
        case "price-dsc":
          return b.price - a.price;
        case "rating-asc":
          return a.rating - b.rating;
        case "rating-dsc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredProducts(updatedProducts);
  }, [products, selectedFilters, selectedSort, searchQuery]);

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    localStorage.setItem("selectedSort", e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    const updatedFilters = { ...selectedFilters };
    if (updatedFilters[filterType].includes(value)) {
      updatedFilters[filterType] = updatedFilters[filterType].filter(
        (item) => item !== value
      );
    } else {
      updatedFilters[filterType].push(value);
    }
    setSelectedFilters(updatedFilters);
    localStorage.setItem("selectedFilters", JSON.stringify(updatedFilters));
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      category: [],
      brand: [],
      concern: [],
    };
    setSelectedFilters(clearedFilters);
    localStorage.setItem("selectedFilters", JSON.stringify(clearedFilters));
  };
const [isSidebarVisible, setIsSidebarVisible] = useState(false);

const handleExpandClick = () => {
  setIsSidebarVisible(!isSidebarVisible);
};

return (
  <>
    <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

    <div id="body-header">
      <div id="expand">
        <button id="expand-btn" onClick={handleExpandClick}>
          <i className={`fa-solid ${isSidebarVisible ? 'fa-up-long' : 'fa-down-long'}`} id="expand-icon"></i>
        </button>
      </div>
      <div className="sort-container">
        <span>Sort By:</span>
        <select
          name="sort"
          id="sort"
          value={selectedSort}
          onChange={handleSortChange}
        >
          <option value="price-asc">Price: Low To High</option>
          <option value="price-dsc">Price: High To Low</option>
          <option value="rating-asc">Rating: Low To High</option>
          <option value="rating-dsc">Rating: High To Low</option>
        </select>
      </div>
    </div>

    <div id="main-store">
      <div id="sidebar" className={isSidebarVisible ? 'visible' : 'hidden'}>
        <button
          className="noselect"
          id="clear-filters"
          onClick={handleClearFilters}
        >
          <span className="text">Clear</span>
          <span className="icon">
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
        <div className="sidebar-section">
          <h5>Categories</h5>
          <ul id="categories-list">
            {filters.category.map((category) => (
              <li className="filter" key={category}>
                <input
                  type="checkbox"
                  id={`category-${category}`}
                  value={category}
                  checked={selectedFilters.category.includes(category)}
                  onChange={() => handleFilterChange("category", category)}
                />
                <label htmlFor={`category-${category}`}>{category}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-section">
          <h5>Brands</h5>
          <ul id="brands-list">
            {filters.brand.map((brand) => (
              <li className="filter" key={brand}>
                <input
                  type="checkbox"
                  id={`brand-${brand}`}
                  value={brand}
                  checked={selectedFilters.brand.includes(brand)}
                  onChange={() => handleFilterChange("brand", brand)}
                />
                <label htmlFor={`brand-${brand}`}>{brand}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-section">
          <h5>Health Concerns</h5>
          <ul id="concern-list">
            {filters.concern.map((concern) => (
              <li className="filter" key={concern}>
                <input
                  type="checkbox"
                  id={`concern-${concern}`}
                  value={concern}
                  checked={selectedFilters.concern.includes(concern)}
                  onChange={() => handleFilterChange("concern", concern)}
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
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Suspense>
        )}
      </div>
    </div>

    <Footer />
  </>
)};

export default Store;