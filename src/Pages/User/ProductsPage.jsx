import React from 'react'
import { Pagination } from '../../Components/Pagination/Pagination';
import { ProductCart } from '../../Components/ProductCart/ProductCart';
import { SearchOption1 } from '../../Components/SearchOption/SearchOption1'
import { SearchOption2 } from '../../Components/SearchOption/SearchOption2';
import ProductDatas from '../../Data/Product.json';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addProduct } from '../../ReduxStorage/Action/ProductAction';
import { useState } from 'react';


export const ProductsPage = () => {
    
    // const [products, setProducts] = useState(ProductDatas);

    const products = useSelector(state=>state.Product.products);
    const dispatch = useDispatch();

    useEffect(()=>{
        
        dispatch(addProduct(ProductDatas))
    }, []);
    

    return (
        <div className="grid md:grid-cols-4 overflow-y-scroll" style={{ height:"33.5rem" }}>
            <div className="md:col-span-3">
                <div className="grid md:grid-cols-3  md:gap-7 p-10 grid-cols-1">
                    {
                        products.map(product=><ProductCart product={product} />)
                    }
                </div>
                <div className="flex justify-center mb-5 ">
                <Pagination className="px-2 py-1 border-r-2"/>
                </div>
            </div>
            <div className="py-5 px-4">
              <h5 className="text-xl font-semibold mt-5 mb-5">Filter Product</h5>
              <SearchOption1/>
              <SearchOption2/>
            </div>
          </div>  
    )
}
