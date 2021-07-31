import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductData from '../../Data/Product.json';
import { CartItem } from '../CartItem/CartItem';

export const OrderLeftSide1 = () => {
    
   const cart = useSelector(state=>state.Product.carts);

    useEffect(()=>{

        

    }, []);
    return (
        <div className="bg-white px-4 py-6 rounded-md">
            {
                cart.map(item=><CartItem item={item}/>)
            }
        </div>
    )
}
