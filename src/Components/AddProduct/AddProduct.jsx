import React from "react";
import { useForm } from "react-hook-form";

export const AddProduct = () => {
  const { register, handleSubmit, formState:{errors} }  = useForm();

  const handelAddProduct = (data)=>{
    
    const form = new FormData();
    form.append("image", data.image[0])
    console.log(form.get("image"))
    const newFormData = {...data, price:parseFloat(data.price), image:form } 
    console.log(JSON.stringify(newFormData))
    form.append('data', JSON.stringify(newFormData));
    
    
    fetch('http://localhost:5000/product/add', {
      method:'POST',
      body:form
      
      
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
    })
  }

  
  return (
    <div className="px-5 py-10 overflow-y-scroll" style={{ height: "31rem" }}>
      <div className="bg-white  rounded-2xl px-10 py-5">
        <h5 className="font-bold text-xl mb-3">Product</h5>
        <h5 className="text-gray-500">Add Product for Sell</h5>
        
        <form onSubmit={handleSubmit(handelAddProduct)} >
          <div className="py-2">
            <label className="block mb-2" htmlFor="">
              Product Name
            </label>
            <input
              {...register('name', { required:true }) }
              className="py-2 px-4 w-3/4 border-2 border-gray-300 focus:border-red-400 focus:outline-none rounded-xl"
              type="text"
            />
            {errors.name && <div className="text-red-600 text-xs mb-2">Product name must be given</div>}
          </div>
          <div className="py-2">
            <label className="block mb-2" htmlFor="">
              Price
            </label>
            <input
            {...register('price', {required:true}) }
              className="py-2 px-4 w-3/4 border-2 border-gray-300 focus:border-red-400 focus:outline-none rounded-xl"
              type="text"
            />
             {errors.price && <div className="text-red-600 text-xs mb-2">Product price must be given</div>}
          </div>
          <div className="py-2">
            <label className="block mb-2" htmlFor="">
              Type
            </label>
            <select
              {...register('category')}
              className="py-1 px-5 border-2 border-gray-300 focus:border-red-400 focus:outline-none rounded-xl"
              type="text"
            >
                <option value="1">Men</option>
                <option value="2">Women</option>
                <option value="3">Child</option>
            </select>
            {errors.category && <div className="text-red-600 text-xs mb-2">At least one category must selected.</div>}
          </div>
          <div className="py-2">
            <label className="block mb-2" htmlFor="">
              Description
            </label>
            <textarea
            {...register('description', {required:true})}
              className="py-2 px-4 w-3/4 border-2 border-gray-300 focus:border-red-400 focus:outline-none rounded-xl"
              type="text"
            />
            {errors.description && <div className="text-red-600 text-xs mb-2">Write something about the product.</div>}
          </div>
          <div className="py-2">
            <label className="block mb-2">
            Select a file
            </label>
            <input  {...register('image', {required:true})} type="file" className="bg-white" />
            {errors.image && <div className="text-red-600 text-xs mb-2">Select a image.</div>}
          </div>
          <input className="mt-3 px-4 py-2 rounded-md bg-indigo-600 text-white" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
