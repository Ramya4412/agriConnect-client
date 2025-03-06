import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <div className="px-4 py-2">
        <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold text-gray-900">
            ${product.price}
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
