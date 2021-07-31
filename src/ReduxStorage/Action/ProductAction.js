import { PRODUCT_ADD,  SHOW_PRODUCT_BY_ID } from "../ActionType/ProductActionType";



// add products
export const addProduct = (products)=>({
    type:PRODUCT_ADD,
    payload:{products}
})

// show by id
export const showProductById = (id)=>({
    type:SHOW_PRODUCT_BY_ID,
    payload:{id}
})