import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    info,
  } = product;

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="group border border-slate-600/70 hover:border-slate-400 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-black/70 text-white">
            -{discount}% OFF
          </span>
        )}

        {/* Sold */}
        <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-black/60 text-white">
          {sold}+ sold
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-3">
        {/* TITLE */}
        <div>
          <h2 className="text-base font-semibold line-clamp-1 group-hover:text-primary transition">
            {title}
          </h2>

          <p className="text-xs text-base-content/60 line-clamp-2 mt-1">
            {bangla}
          </p>
        </div>

        {/* RATING */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-warning">
            <FaStar />
            <span className="font-medium">{ratings}</span>
          </div>

          <span className="text-xs text-base-content/50">
            {reviews} reviews
          </span>
        </div>

        {/* PRICE */}
        <div className="flex items-end gap-2">
          <h3 className="text-xl font-bold text-primary">৳{discountedPrice}</h3>

          <span className="text-sm line-through text-base-content/40">
            ৳{price}
          </span>
        </div>

        {/* INFO CHIPS (NEW - IMPORTANT UPGRADE) */}
        {info?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {info.slice(0, 2).map((item, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-1 rounded-full border border-base-300 text-base-content/70"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* BUTTONS */}
        <div className="flex gap-2 pt-1">
          <button className="flex-1 text-sm font-medium rounded-lg border border-primary text-primary py-2 hover:bg-primary hover:text-white transition">
            Add to Cart
          </button>

          <button className="text-sm px-4 rounded-lg border border-base-300 hover:border-base-content/40 transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
