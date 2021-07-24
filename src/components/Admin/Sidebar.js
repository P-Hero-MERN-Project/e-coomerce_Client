import React from "react";
import { useState } from "react";
import logo from "./../../images/logo_white.png";
import {
    NavLink
  } from "react-router-dom";
const Sidebar = ({ children,SidebarName }) => {
  const [toggled, setToggled] = useState(false);
  const handleLoginToggle = () => {
    setToggled((prevState) => !prevState);
  };

  const url="/admin/dashboard"
 
  return (
    <div className="h-screen flex ">
      <div className="w-3/12 h-screen shadow">
        <div className="relative bg-gray-800 ">
          <div className="flex flex-col sm:flex-row sm:justify-around">
            <div className="w-72 h-screen">
              <div className="flex items-center justify-start mx-6 mt-1">
                <img alt="" className="w-32 h-24" src={logo} />
              </div>
              <nav className="px-4 ">
                <NavLink to={`${url}/home`}
                  activeClassName="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 mb-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 m-auto"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="mx-4 text-lg font-normal">Home</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>
                <NavLink to={`${url}/productList`}
                   activeClassName="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 mb-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-autoh-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                  <span className="mx-4 text-lg font-normal">Product List</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>
                <NavLink to={`${url}/orderList`}
                   activeClassName="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="mx-4 text-lg font-normal">Order List</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>
                <NavLink to={`${url}/buyer`}
                   activeClassName="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  href="/orderList"
                >
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 m-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="mx-4 text-lg font-normal">Buyer</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>
                <NavLink to={`${url}/invoince`}
                   activeClassName="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                  className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                  href="/buyer"
                >
                  <svg
                    width="20"
                    height="20"
                    className="m-auto h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="mx-4 text-lg font-normal">Invoincs</span>
                  <span className="flex-grow text-right"></span>
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-9/12   h-screen bg-gray-100">
        <div className="grid pt-4 grid-flow-col h-16 bg-blue-50 rounded-b-lg shadow">
          <div className=" justify-self-start pl-2">
            <p className="font-bold">{SidebarName}</p>
          </div>
          <div className="justify-self-end">
            <div className="flex flex-row">
              <p className="font-bold px-1">Welcome Admin</p>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    onClick={handleLoginToggle}
                    type="button"
                    className="flex items-center justify-center w-full rounded-md  px-4  text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                    id="options-menu"
                  >
                    <svg
                      width="20"
                      fill="currentColor"
                      height="20"
                      className="text-gray-800"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                    </svg>
                  </button>
                </div>
                {toggled && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1 "
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <button
                        className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                        role="menuitem"
                      >
                        <span className="flex flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          <span>Logout</span>
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
       <div className="p-6 max-h-full">
       {children}
       </div>
      </div>
    </div>
  );
};

export default Sidebar;
