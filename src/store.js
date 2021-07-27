import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { productReducer, productDetailsReducer, newProductReducer, deleteProductReducer } from '../src/Reducers/productReducer'
import { authReducer, userReducer } from '../src/Reducers/userReducer'

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    newProduct: newProductReducer,
    product: deleteProductReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store