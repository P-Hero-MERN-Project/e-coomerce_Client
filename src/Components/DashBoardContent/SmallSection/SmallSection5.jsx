import React from "react";

export const SmallSection5 = ({ item }) => {
  return (
    <div className="bg-white py-10 px-3 rounded-lg shadow-md flex flex-col items-center">
      <div>
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
      <h4 className="text-lg font-semibold mt-3">{item.title}</h4>
      <h5 className="overflow-hidden text-gray-500">{item.amount} items</h5>
      <div className="w-full bg-gray-200 h-1 mt-2 rounded-full">
        <div className="bg-green-400 h-1 w-10/12"></div>
      </div>
    </div>
  );
};
