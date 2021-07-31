import React from "react";

export const SmallSection6 = ({ item }) => {
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
      <h4 className="text-lg font-semibold mt-3">{item.title}</h4>
      <h5 className="overflow-hidden text-gray-500">{item.amount} items</h5>
      <div className="w-full bg-gray-200 h-1 mt-2 rounded-full">
        <div className="bg-green-400 h-1 w-12/12"></div>
      </div>
    </div>
  );
};
