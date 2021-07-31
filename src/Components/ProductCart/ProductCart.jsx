import React from "react";
import { Link } from "react-router-dom";

export const ProductCart = ({ product }) => {
  const { id, img, name, price } = product;
  return (
    <div className="bg-white rounded-xl shadow-md">
      <img
        className="rounded-t-xl w-full h-44"
        src="https://picsum.photos/200"
        alt=""
      />
        <div className="px-4 py-5">
        <h5 className="py-4 font-bold text-2xl text-red-500">{name}</h5>
        <h5 className="mb-2 font-semibold text-xl">{price}</h5>
        <Link to={`/productdetail/${id}`} className="mb-5 px-3 py-1 bg-red-500 rounded-md text-white">Details</Link>
        </div>
      
    </div>
  );
};
