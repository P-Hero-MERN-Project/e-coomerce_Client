import "./assets/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Pages/Admin/HomePage";
import { HomePage as UserHomePage } from "./Pages/User/HomePage";
import { DashBoardContent } from "./Components/DashBoardContent/DashBoardContent";
import { AddProduct } from "./Components/AddProduct/AddProduct";
import { ShowProduct } from "./Components/ShowProduct/ShowProduct";
import { OrderList } from "./Components/OrderList/OrderList";
import { CustomerList } from "./Components/CustomerList/CustomerList";
import { ProductsPage } from "./Pages/User/ProductsPage";
import { ProductDetailPage } from "./Pages/User/ProductDetailPage";
import { OrderProductCart } from "./Components/OrderProductCart/OrderProductCart";
import { LoginPage } from "./Pages/User/LoginPage";
import { SignupPage } from "./Pages/User/SignupPage";
import { ProfilePage } from "./Pages/User/ProfilePage";

function App() {
  return (
    <Router>
      {/* switch */}
      <Switch>

        
        {/* this is the admin panel */}
        {/* customer list */}
        <Route path="/customerList">
          <HomePage>
            <CustomerList/>
          </HomePage>
        </Route>
        {/* Order List */}
        <Route path="/OrderList">
          <HomePage>
            <OrderList/>
          </HomePage>
        </Route>
        {/* show product */}
        <Route path="/product_all">
          <HomePage>
            <ShowProduct />
          </HomePage>
        </Route>
        {/* add product */}
        <Route path="/addProduct">
          <HomePage>
            <AddProduct />
          </HomePage>
        </Route>
        {/* home page */}
        <Route path="/dashboard">
          <HomePage>
            <DashBoardContent />
          </HomePage>
        </Route>

        {/* user panel */}
        <Route path="/profile">
          <UserHomePage>
            <ProfilePage/>
          </UserHomePage>
        </Route>
        <Route path="/signup">
          <UserHomePage>
            <SignupPage/>
          </UserHomePage>
        </Route>
        <Route path="/login">
          <UserHomePage>
            <LoginPage/>
          </UserHomePage>
        </Route>
        <Route path="/productCart">
          <UserHomePage>
            <OrderProductCart/>
          </UserHomePage>
        </Route>
        <Route path="/productdetail/:id">
          <UserHomePage>
            <ProductDetailPage/>
          </UserHomePage>
        </Route>
        <Route path="/">
          <UserHomePage>
            <ProductsPage/>
          </UserHomePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
