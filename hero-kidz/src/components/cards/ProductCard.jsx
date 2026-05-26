import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { title, bangla, image, price, discount, ratings, reviews, sold } =
    product;

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="group border border-base-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-base-100">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Discount Badge */}
        <div className="absolute top-4 left-4">
          <span className="badge badge-primary text-white font-semibold px-4 py-3">
            -{discount}%
          </span>
        </div>

        {/* Sold Badge */}
        <div className="absolute top-4 right-4">
          <span className="badge badge-neutral px-4 py-3">{sold}+ Sold</span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <div>
          <h2 className="text-lg font-bold line-clamp-1">{title}</h2>

          <p className="text-sm text-base-content/60 mt-1 line-clamp-2">
            {bangla}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-warning">
            <FaStar />
            <span className="font-semibold text-sm">{ratings}</span>
          </div>

          <span className="text-sm text-base-content/50">
            ({reviews} Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-black text-primary">
            ৳{discountedPrice}
          </h3>

          <p className="text-base-content/40 line-through">৳{price}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="btn btn-primary flex-1 rounded-xl">
            Add To Cart
          </button>

          <button className="btn btn-outline rounded-xl">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
