import React from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { showProductById } from "../../ReduxStorage/Action/ProductAction";
import { useForm } from "react-hook-form";
import { addCart } from "../../ReduxStorage/Action/CartAction";

export const ProductDetailPage = () => {
  const { id } = useParams();

  

  const product = useSelector(state=>state.Product.productDetail);
 

  const { register, handleSubmit, formState:{errors}  } = useForm();


  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(showProductById(id));
  }, [id, dispatch]);
  
  const handelAddCart = ({ quantity })=>{
    
    dispatch(addCart({...product, quantity:parseInt(quantity)}))
  }

  return (
    <div className="px-10 py-5 overflow-y-scroll" style={{ height:"33.5rem" }}>
      <div className="bg-white rounded-xl px-6 py-4 md:grid-cols-3 grid grid-cols-1 gap-3">
        <div className="flex justify-center">
          <img className="rounded-xl" src="https://picsum.photos/400" alt="" />
        </div>
        <div className="px-6 py-3">
          <h5 className="text-xs text-gray-500 mb-4">Technology products</h5>
          <h4 className="text-2xl font-bold mb-2">{ product.name }</h4>
          <p className="py-2 text-md text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            perspiciatis similique assumenda consequuntur voluptatem rem quas
            facere eligendi quo, tempore explicabo quis! Iusto dignissimos
            veritatis exercitationem, quia fugiat quae ipsa.
          </p>
          <h5 className="font-semibold text-lg p-5">{ product.price }</h5>
          <form className="flex" onSubmit={handleSubmit(handelAddCart)} >
            <input {...register("quantity", { required:true })} defaultValue="1" className="focus:outline-none border-2 px-5 py-1 rounded-l-lg focus:border-yellow-600" type="number" />
            <input type="submit"  className="bg-yellow-600 text-white px-3 rounded-r-lg" value="Add To Cart"/>
          </form>
          { errors.quantity && <div className="bg-red-300 text-white rounded-md py-1 px-2 mt-2">Please add quantity</div> }
        </div>
      </div>
    </div>
  );
};
