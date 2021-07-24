import React from "react";
import logo from "../../images/logo.png"

const AdminLoginPage = () => {
  return (
    <div className="h-screen bg-gray-300 grid place-items-center">
    
        
      <div className="bg-gray-50 md:w-2/6  h-5/6 rounded-lg shadow sm:w-5/6 ">
          <div className="flex justify-center"> 
              
      <img className="w-32 h-20" src={logo} alt=""/>
          </div>
        <p className="text-4xl text-center  font-mono">Log in</p>
        <div className="flex justify-center py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="py-1 px-10">
          <form>
            <label className="text-2xl text-gray-700">Email</label>
            <input
              type="email"
              id="required-email"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  my-2"
              name="email"
              placeholder="Your email"
              required
            />
            <label for="with-indications" className="text-gray-700 text-2xl ">
              Password
            </label>
            <input
              type="password"
              id="with-indications"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  my-2"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="submit"
              className=" mt-3 flex justify-center items-center bg-green-500 text-white px-6 py-2 rounded font-medium w-full hover:bg-green-600 transition duration-200 each-in-out"
            />
          </form>
      <div className="pt-4">
        <div className="text-center">
          <button className=" pb-2 text-blue-600 font-medium hover:text-blue-800">Forgotten password?</button>
        </div>
      <div className="bg-red-200 border-red-600 text-red-600 border-l-4 p-3" role="alert">
    <p className="font-bold">
        Be Warned
    </p>
    
</div> 
      </div>

        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
