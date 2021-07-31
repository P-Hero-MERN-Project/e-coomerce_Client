import React from "react";

export const Sub2 = ({ item }) => {
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      </div>
      <h4 className="font-semibold text-xl mb-3">{item.title}</h4>
      <h4 className="font-bold text-2xl">{item.amount}</h4>
      <h5 className="text-green-400">Over Last month</h5>
    </div>
  );
};
