import React from 'react'
import { useSelector } from 'react-redux'

export const OrderRightSide1 = () => {
    const carts = useSelector(state=>state.Product.carts);
    let subTotal = carts.reduce((sum, cart)=>cart.price*cart.quantity+sum, 0);
    return (
        <div className="bg-white py-5 rounded-2xl">
            <h5 className="p-4 text-xl">Price</h5>
            <div  className="flex justify-center">
                <div>
                    <h4  className="text-gray-700 mb-3">Sub total: <span className="px-4">{subTotal}</span></h4>
                    <h6 className="text-gray-700 mb-3">Shipping:  <span className="px-4">Free</span></h6>
                    <h5 className="text-gray-700 mb-3">Tax(18%): <span className="px-4">$50</span></h5>
                    <h6 className="text-gray-700 mb-3 font-bold">Total: <span className="px-4">{ subTotal+50 }</span></h6>
                </div>
            </div>
        </div>
    )
}
