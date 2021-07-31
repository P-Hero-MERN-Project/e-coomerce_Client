import React from 'react'
import ProductData from '../../../Data/Product.json';

export const T1 = () => {
    return (
        
            <div className="table px-2 py-2 w-full">
                <div className="table-row px-2 py-2 border-2">
                        <div className="table-cell">Photo</div>
                        <div className="table-cell">Name</div>
                        <div className="table-cell">price</div>
                    
                </div>
                
                    {
                        ProductData.map(product=>(
                            <div className="table-row">
                                <div className="table-cell">
                                    <img src={product.img} alt="" />
                                </div>
                                <div className="table-cell">{product.name}</div>
                                <div className="table-cell">{product.price}</div>
                            </div>
                        ))
                    }
                
            </div>
       
    )
}
