import { combineReducers } from 'redux'
import { cartReducer } from './CartReducer';
import { productReducer } from './ProductReducer'

const rootReducer = combineReducers({
    Product:productReducer
})

export default rootReducer;