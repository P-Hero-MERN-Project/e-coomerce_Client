import React from "react";
import ProductData from "../../Data/Product.json";
import { CustomTable } from "../CustomTable/CustomTable";
import { Pagination } from "../Pagination/Pagination";
import { TableHead } from "../TableHead/TableHead";
import { TableRowCart } from "../TableRowCart/TableRowCart"


export const ShowProduct = () => {
  return (
    <div className="p-3 mt-5 overflow-y-scroll" style={{ height: "31rem" }}>
      <CustomTable items={ProductData} tableContent={TableRowCart}>
        <TableHead heads={["Photo", "name", "price", "action"]}/>
        </CustomTable>
      <div className="flex justify-center mb-3">
      <Pagination className="px-3 py-2 border-2"/>
      </div>
      
    </div>
  );
};
