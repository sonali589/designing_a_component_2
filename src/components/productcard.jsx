import React from "react";
import ViewProductButton from "../components/button"; // Import button component

const Productcard = () => {
  
  const productImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-Dc9KLtAheIeVKV0gcGL_BSl81q3r2O0sg&s";
  const productName = "MacBook Air M3";
  const productPrice = "$999";

  return (
    <div className="border p-4 rounded-lg shadow-md max-w-sm">
      <img src={productImage} alt={productName} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;

