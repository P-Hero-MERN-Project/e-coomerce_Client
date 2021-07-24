import React from "react";
import AdminHomePage from "./AdminHomePage";
import { Switch, Route, useRouteMatch,Redirect } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import OrderListPage from "./OrderListPage";
import BuyerPage from "./BuyerPage";
import InvoincePage from "./InvoincePage";
const AdminDashboardPage = () => {
  let { path } = useRouteMatch();
  console.log("path :" + path);
  return (
    <Switch>
   
      <Route exact  path={path}   >
      <Redirect to={`${path}/home`} />
      </Route>
        
      <Route path={`${path}/home`} component={AdminHomePage} />
      <Route path={`${path}/productList`} component={ProductListPage} />
      <Route path={`${path}/orderList`} component={OrderListPage} />
      <Route path={`${path}/buyer`} component={BuyerPage} />
      <Route path={`${path}/invoince`} component={InvoincePage} />
    </Switch>
  );
};

export default AdminDashboardPage;
