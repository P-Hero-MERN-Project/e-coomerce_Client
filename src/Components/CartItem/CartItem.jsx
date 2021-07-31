import React from "react";
import { useDispatch } from "react-redux";
import { deleteCart, updateCart } from "../../ReduxStorage/Action/CartAction";

export const CartItem = ({ item }) => {
  const { id, name, price, quantity } = item;
  const dispatch = useDispatch();

  const handelDelete = ()=>{
    dispatch(deleteCart(id));
  }

  const handelUpdate = (action)=>{
   dispatch(updateCart(id, action));
  }

  return (
    <div className="flex border-2 px-2 py-3 mb-3 rounded-md items-center justify-between">
      <img
        className="rounded-full w-20 h-20"
        src="https://picsum.photos/200"
        alt=""
      />
      <h5>{name}</h5>
      <div className="flex ml-2">
        <button onClick={()=>quantity && handelUpdate('decrease')} className="bg-red-500 px-3 py-1 text-white font-semibold rounded-md">-</button>
        <div className="ml-2 mr-2">{ quantity }</div>
        <button onClick={()=>handelUpdate('increase')} className="bg-red-500 px-3 py-1 text-white font-semibold rounded-md">+</button>
      </div>
      <h5>{price}</h5>
      <h4>{price*quantity}</h4>
      <button onClick={handelDelete} className="text-red-500 px-4 py-4 border-2 border-red-400 rounded-lg">
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};
