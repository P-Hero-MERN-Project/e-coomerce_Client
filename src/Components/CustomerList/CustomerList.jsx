import React from 'react'
import { CustomTable } from '../CustomTable/CustomTable'
import { Pagination } from '../Pagination/Pagination'
import { TableHead } from '../TableHead/TableHead';
import CustomerData from "../../Data/CustomerData.json";
import { CustomerRowCart } from '../TableRowCart/CustomerRowCart';

export const CustomerList = () => {
    return (
        <div className="p-3 mt-5 overflow-y-scroll" style={{ height: "31rem" }}>
        <CustomTable items={CustomerData} tableContent={CustomerRowCart}>
            <TableHead heads={["Photo", "fullName", "email", "Actions"]}/>
        </CustomTable>
        <div className="flex justify-center mb-3">
        <Pagination className="px-3 py-2 border-2"/>
        </div>
        
      </div>
    )
}
