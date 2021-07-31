import React from 'react'
import { useForm } from 'react-hook-form'

export const SignupPage = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const handelSignUp = data=>{
        console.log(data);
    }

    return (
        <div
        className="px-10 py-5 overflow-y-scroll flex justify-center"
        style={{ height: "33.5rem" }}
      >
        <div className="bg-white rounded-md px-4 py-2 w-96 h-4/5 shadow-lg">
          <h5 className="font-semibold text-black text-2xl py-5 px-10">
            Sign Up
          </h5>
          <form className="py-5 px-16" onSubmit={handleSubmit(handelSignUp)}>
            <div className="flex flex-col items-center">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name', { required:true, maxLength:15})}
                  className="border-2 border-gray-300 px-5 py-1 rounded-md focus:outline-none focus:border-red-400"
                />
                { errors.name && <div className="text-red-600 text-xs mt-2 mb-1">Enter the name</div> }
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email', { required:true, pattern:/\S+@\S+\.\S+/})}
                  className="border-2 border-gray-300 px-5 py-1 rounded-md focus:outline-none focus:border-red-400"
                />
                { errors.email && <div className="text-red-600 text-xs mt-2 mb-1">Enter the valid email</div> }
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="password"
                  {...register('password', { required:true, minLength:6})}
                  className="border-2 border-gray-300 px-5 py-1 rounded-md focus:outline-none focus:border-red-400"
                />
                { errors.password && <div className="text-red-600 text-xs mt-2 mb-1">password must be at least 6 character</div> }
              </div>
              
            </div>
            <input className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700" type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    )
}
