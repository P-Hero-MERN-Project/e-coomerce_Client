import { CART_ADD, CART_DELETE, CART_UPDATE } from "../ActionType/CartActionType";

// add the cart
export const addCart = (cart)=>({
    type:CART_ADD,
    payload:{cart}
})

// delete the cart item
export const deleteCart = (id)=>({
    type:CART_DELETE,
    payload:{id}
})

// update the cart
export const updateCart = (id, action)=>({
    type:CART_UPDATE,
    payload:{id, action}
})