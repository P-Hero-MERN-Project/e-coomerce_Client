import {
  CART_ADD,
  CART_DELETE,
  CART_UPDATE,
} from "../ActionType/CartActionType";
import { ADD_ORDER } from "../ActionType/OrderListActionType";
import {
  PRODUCT_ADD,
  SHOW_PRODUCT_BY_ID,
} from "../ActionType/ProductActionType";

export const initialState = {
  products: [],
  productDetail: {},
  carts: [],
  orderList:[],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {...state, orderList:action.payload.orders}
    case CART_UPDATE:
      let updateCart = [];

      const indexOfMatchUpdate = state.carts.findIndex(
        (cart) => cart.id == action.payload.id
      );

      const matchItemUpdate = state.carts.filter(
        (cart) => cart.id == action.payload.id
      )[0];
      if (action.payload.action === "increase") {
        matchItemUpdate.quantity += 1;
      } else if (action.payload.action === "decrease") {
        matchItemUpdate.quantity -= 1;
      }
      updateCart = [
        ...state.carts.slice(0, indexOfMatchUpdate),
        matchItemUpdate,
        ...state.carts.slice(indexOfMatchUpdate + 1, state.carts.length),
      ];
      return { ...state, carts: updateCart };

    case CART_DELETE:
      const newCarts = state.carts.filter(
        (cart) => cart.id != action.payload.id
      );
      return { ...state, carts: newCarts };

    case CART_ADD:
      let newCart = [];

      const indexOfMatch = state.carts.findIndex(
        (cart) => cart.id == action.payload.cart.id
      );
      if (indexOfMatch > -1) {
        const matchItem = state.carts.filter(
          (cart) => cart.id == action.payload.cart.id
        )[0];
        
        newCart = [
          ...state.carts.slice(0, indexOfMatch),
          { ...matchItem, quantity:matchItem.quantity+action.payload.cart.quantity },
          ...state.carts.slice(indexOfMatch + 1, state.carts.length),
        ];
      } else {
        newCart = [...state.carts, action.payload.cart];
      }

      return { ...state, carts: [...newCart] };
    // this is the product add action
    case PRODUCT_ADD:
      const newProducts = [...state.products, ...action.payload.products];
      return { ...state, products: newProducts };
    case SHOW_PRODUCT_BY_ID:
      const newProduct = state.products.filter(
        (product) => product.id == action.payload.id
      );
      return {
        ...state,
        productDetail: newProduct.length > 0 ? newProduct[0] : {},
      };
    default:
      return state;
  }
};
