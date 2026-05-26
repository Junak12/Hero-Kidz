import ProductCard from "@/components/cards/ProductCard";
import { getProducts } from "@/services/productServices";
import React from "react";


const Product = async () => {
  const products = await getProducts();

  return (
    <div className="py-16">
      <div>
        <h1 className="text-center text-4xl mb-10 font-bold">Our Product</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.data?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
