import React from "react";

export const SmallSection4 = ({ item }) => {
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
            d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      </div>
      <h4 className="text-lg font-semibold mt-3">{item.title}</h4>
      <h5 className="overflow-hidden text-gray-500">{item.amount} items</h5>
      <div className="w-full bg-gray-200 h-1 mt-2 rounded-full">
        <div className="bg-green-400 h-1 w-4/12"></div>
      </div>
    </div>
  );
};
