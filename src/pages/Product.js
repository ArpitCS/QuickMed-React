import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, db, getDoc } from "../config/firebase";

import { CartContext } from "../context/CartContext";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [drugInfo, setDrugInfo] = useState(null);
  const { id } = useParams();
  const productId = id;

  const { addToCart } = React.useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log("Product added to cart:", product);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "Products", productId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          const productData = {
            id: productSnap.id,
            ...productSnap.data(),
          };
          setProduct(productData);

          if (productData.drug_name) {
            fetchDrugInfo(productData.drug_name);
          }
        } else {
          console.log("No such product exists!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const fetchDrugInfo = async (drugName) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const apiUrl = `https://api.fda.gov/drug/label.json?search=active_ingredient:${drugName}&limit=1`;

    try {
      const response = await fetch(apiUrl, requestOptions);
      const result = await response.json();

      if (result.results && result.results.length > 0) {
        const drug = result.results[0];
        setDrugInfo({
          drugName: drug.openfda?.brand_name?.[0] || drugName,
          activeIngredient: drug.active_ingredient?.[0] || "N/A",
          purpose: drug.purpose?.[0] || "N/A",
          manufacturer: drug.openfda?.manufacturer_name?.[0] || "N/A",
          description: drug.description?.[0] || "No description available",
          warnings: drug.warnings?.[0] || "No warnings available",
          dosage:
            drug.dosage_and_administration_table?.[0] ||
            "No dosage information available",
          sideEffects:
            drug.adverse_reactions?.[0] || "No adverse reactions listed",
        });
      }
    } catch (error) {
      console.error("Error fetching drug information:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Header />

      <div id="product" className="row">
        <span className="backbtn">
          <Link to="/store">
            <i className="fa fa-backward"></i>
          </Link>
        </span>
        <div className="col-md-4 col-sm-12">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="col-md-4 col-sm-12">
          <h2>{product.name}</h2>
          <Link to="/store">Visit QuickMED Store</Link>
          <h3>Rs. {product.price}</h3>
          <p className="taxinc">Inclusive of all Taxes</p>
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>
        <div className="col-md-3 buttons-container col-sm-12">
          <button className="product-cart" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
          <Link to="/cart" className="view-cart">
            <span>View Cart</span>
          </Link>
        </div>

        {drugInfo && (
          <div className="drug-info-container">
            <div className="info-grid">
              <div className="info-card">
                <h2 className="info-heading">Active Ingredients</h2>
                <p className="info-content">{drugInfo.activeIngredient}</p>
              </div>
              <div className="info-card">
                <h2 className="info-heading">Purpose</h2>
                <p className="info-content">{drugInfo.purpose}</p>
              </div>
              <div className="info-card">
                <h2 className="info-heading">Dosage</h2>
                <div
                  className="dosage-table"
                  dangerouslySetInnerHTML={{ __html: drugInfo.dosage }}
                ></div>
              </div>
              <div className="info-card">
                <h2 className="info-heading">Side Effects</h2>
                <p className="info-content">{drugInfo.sideEffects}</p>
              </div>
            </div>
            <div className="warnings">
              <h2 className="info-heading">Warnings</h2>
              <p className="info-content">{drugInfo.warnings}</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Product;
