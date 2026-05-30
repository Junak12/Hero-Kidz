"use client";

const AddToCartButton = ({ product }) => {
  const handleAddToCart = () => {
    console.log("Add to cart:", product);
    // later: context / redux / api call
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex-1 text-sm font-medium rounded-lg cursor-pointer  border border-primary text-primary py-2 hover:bg-primary hover:text-white transition"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
