import React from "react";

export const SearchOption1 = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h5 className="mb-3 font-medium text-gray-500">Keywords</h5>
      <div className="flex">
        <input
          className="px-5 py-1 focus:border-red-500 focus:outline-none border-2 rounded-l-lg"
          placeholder="Men, Women, Child"
          type="text"
        />
        <button className="border-2  px-2 flex items-center rounded-r-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
