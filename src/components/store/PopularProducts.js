import React, { Suspense, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

import ProductCard from "./ProductCard";

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const querySnapshot = await getDocs(collection(db, "Products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPopularProducts(productsData);
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
      <div id="popular-cards">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            {popularProducts.map((product) => (
                <div className="col-lg-3 col-12">
                    <ProductCard key={product.id} product={product} />
                </div>
            ))}
          </Suspense>
        )}
      </div>
    </>
  );
};

export default PopularProducts;
