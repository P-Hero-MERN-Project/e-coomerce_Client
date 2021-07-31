import React from 'react'

export const CustomerRowCart = ({ name, picture, email }) => {
    return (
        <div className="bg-white w-full flex justify-evenly py-3 mb-3 items-center rounded-lg shadow-sm">
         <img src={picture} alt="" />   
        <div>{name}</div>
        <div>{email}</div>
        <div className="action relative">
            ...
            <div className="bg-white absolute  z-10 px-5 py-1 gap-2 rounded-lg shadow-lg action-show">
                <button className="hover:text-red-400">Edit</button>
                <button className="hover:text-red-400">Delete</button>
            </div>
        </div>
    </div>
    )
}
