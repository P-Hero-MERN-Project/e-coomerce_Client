import React from "react";

export const SmallSection1 = ({ items }) => {
  return (
    <div className="flex justify-around">
      {items.map((item, index) => (
        <h4 className={`font-light text-sm py-1 px-1 flex ${index%2?"text-green-400":"text-red-300"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {item}%
        </h4>
      ))}
    </div>
  );
};
