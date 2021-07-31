import React from "react";

export const Sub1 = ({ item }) => {
  return (
    <div className="bg-white p-3 rounded-md shadow-md py-10 px-5">
      <div className="mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
      <h4 className="font-semibold text-xl mb-3">{item.title}</h4>
      <h4 className="font-bold text-2xl">{item.amount}</h4>
      <h5 className="text-green-400" >Over Last month</h5>
    </div>
  );
};
