import React from 'react'
import { CustomTable } from '../CustomTable/CustomTable'
import { Pagination } from '../Pagination/Pagination'
import { TableHead } from '../TableHead/TableHead';
import OrderData from "../../Data/OrderData.json";
import { OrderRowCart } from '../TableRowCart/OrderRowCart';

export const OrderList = () => {
    return (
        <div className="p-3 mt-5 overflow-y-scroll" style={{ height: "31rem" }}>
            <CustomTable items={OrderData} tableContent={OrderRowCart} >
                <TableHead heads={["name", "date", "total", "status", "actions"]} />
            </CustomTable>
      <div className="flex justify-center mb-3">
      <Pagination className="px-3 py-2 border-2"/>
      </div>
      
    </div>
    )
}
