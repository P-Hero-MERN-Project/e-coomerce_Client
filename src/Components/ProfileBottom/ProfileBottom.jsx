import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addOrders } from '../../ReduxStorage/Action/OrderListAction';
import { ShowOrderList } from '../ShowOrderList/ShowOrderList';
import OrderData from '../../Data/CartsData.json';
import { Pagination } from '../Pagination/Pagination';
export const ProfileBottom = () => {
    const orders = useSelector(state=>state.Product.orderList);
    const dispatch = useDispatch();

    dispatch(addOrders(OrderData))
    
    return (
        <div className="mt-5 bg-white rounded-lg">
            <div className="bg-gray-300 rounded-t-lg px-3 py-5 flex justify-between">
                <h5>Yours Orders</h5>
                <select className="focus:outline-none rounded-md px-2 py-1" name="" id="">
                    <option value="">Delevered</option>
                    <option value="">Paid</option>
                    <option value="">Cancelled</option>
                    <option value="">Incomplete</option>
                </select>
            </div>
            <div className="mb-2">
                {
                    orders.map(order=><ShowOrderList order={order} />)
                }
            </div>
            <div className="flex justify-center py-3">
            <Pagination className="px-2 py-1 border-2"/>
            </div>
        </div>
    )
}
