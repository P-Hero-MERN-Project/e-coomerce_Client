import { ADD_ORDER } from "../ActionType/OrderListActionType";

export const addOrders = (orders)=>({
    type:ADD_ORDER,
    payload:{orders}
})