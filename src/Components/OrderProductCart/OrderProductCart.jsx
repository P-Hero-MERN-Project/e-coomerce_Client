import React from "react";
import { OrderLeftSide1 } from "../OrderLeftSide/OrderLeftSide1";
import { OrderRightSide1 } from "../OrderRightSide/OrderRightSide1";

export const OrderProductCart = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 overflow-y-scroll" style={{ height:"33.5rem" }}>
      <div className="col-span-2 px-4 py-3">
          <OrderLeftSide1/>
      </div>
      <div className="px-10 py-5">
        <OrderRightSide1 />
        <div className="mt-3">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md">All Clear</button>
        <button className="bg-green-400 text-white px-4 py-2 rounded-md ml-3">Checkout</button>
        </div>
       
      </div>
    </div>
  );
};
