import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { productReducer, productDetailsReducer, newProductReducer, deleteProductReducer } from '../src/Reducers/productReducer'
import { authReducer, userReducer } from '../src/Reducers/userReducer'
import { cartReducers } from "./Reducers/cartReducer";
import { newOrderReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer } from './Reducers/orderReducer';

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    newProduct: newProductReducer,
    product: deleteProductReducer,
    cart: cartReducers,
    newOrder: newOrderReducer,
    allOrders: allOrdersReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    order: orderReducer
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {}
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store