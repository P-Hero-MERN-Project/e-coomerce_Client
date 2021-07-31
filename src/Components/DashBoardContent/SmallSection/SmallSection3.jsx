import React from "react";

export const SmallSection3 = ({ item }) => {
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
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
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
