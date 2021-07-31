import React from 'react'

export const SearchOption2 = () => {
    return (
        <div className="mt-5 bg-white p-3 rounded-lg">
            <h5 className="text-gray-400 font-bold">Categories</h5>
            <form className="p-4">
                <div className="mb-2">
                <input  type="checkbox" /><span className="text-gray-500 font-semibold ml-3">Men</span><br />
                </div>
                <div className="mb-2">
                <input type="checkbox" /><span className="text-gray-500 font-semibold ml-3">Women</span><br />
                </div>
                <div className="mb-2">
                <input type="checkbox" /><span className="text-gray-500 font-semibold ml-3">Children</span>
                </div>
                
               
            </form>
        </div>
    )
}
