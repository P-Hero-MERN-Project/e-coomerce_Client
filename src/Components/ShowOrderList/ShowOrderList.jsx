import React from "react";

export const ShowOrderList = ({ order }) => {
  const { id, date, status } = order;

  return (
    <div className="border-b-2 px-4 py-2 flex justify-between items-center">
      <div>
        <h6 className="text-gray-400">{date}</h6>
        <h5 className="font-bold">{id}</h5>
      </div>
      <span className="bg-red-200 text-red-500 w-20 h-8 text-center rounded-full">
          {status}
      </span>
    </div>
  );
};
