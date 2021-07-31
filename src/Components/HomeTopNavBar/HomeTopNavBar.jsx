import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './HomeTopNavBar.css';

export const HomeTopNavBar = () => {

  const cart = useSelector(state=>state.Product.carts);

  const count = cart.reduce((sum, item)=>item.quantity+sum,0);

  return (
    <div className="bg-blue-100 h-20 px-5 flex items-center justify-between">
      <Link to="/">DocDoc</Link>
      <div className="md:flex gap-10 items-center ml-10">
        <div className="flex">
          <button className="bg-white px-2 rounded-l-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
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
          <input
            placeholder="Search..."
            className="w-80 py-2 px-5 rounded-r-md focus:outline-none"
            type="text"
          />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        <Link to="/productCart" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="absolute -right-3 -top-3 bg-red-600 text-white px-1 text-center rounded-full text-sm">
            {
              cart.length>0?count:''
            }
          </span>
        </Link>
        <Link
          to="/signup"
          className="flex bg-red-400 rounded-md text-white px-5 py-2"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="flex bg-red-400 rounded-md text-white px-5 py-2"
        >
          Login
        </Link>
        <div
          
          className="px-2 py-2 relative cursor-pointer"
        >
         <img className="rounded-full profile" src="https://picsum.photos/40/40" alt="" />
         <div className="absolute top-10 rounded-md bg-white flex flex-col p-1 action-bar">
           <Link to="/profile" className="hover:bg-red-300 text-center mb-2 px-3 py-1">Profile</Link>
           <Link to="/user/dashboard" className="hover:bg-red-300 text-center mb-2 px-3 py-1">DashBoard</Link>
         </div>
        </div>
        <button className="bg-gray-700 rounded-full text-white p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
