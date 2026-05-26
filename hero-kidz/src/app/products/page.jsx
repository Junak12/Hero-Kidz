import React from "react";
import ProductCard from "@/components/cards/ProductCard";
import { getProducts } from "@/services/productServices";

const ProductPage = async () => {
  const data = await getProducts();
  const products = data?.data || [];

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Products</h1>

        <p className="text-base-content/60 mt-2">
          Browse all educational products
        </p>
      </div>

      {/* PRODUCTS GRID */}
      {products.length === 0 ? (
        <p className="text-center text-base-content/60">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
