import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from "./components/Home";
import Footer from "./components/Layoutes/Footer";
import Header from "./components/Layoutes/Header";
import ProductDetails from './components/Product/ProductDetails';
import Login from './components/User/Login';
import Register from './components/User/Register';
import store from './store';
import { loadUser } from './action/userAction';
import Profile from './components/User/Profile';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import UpdateProfile from './components/User/UpdateProfile';

// admin import
import Dashboard from './components/Admin/Dashboard';
import ProductList from './components/Admin/ProductList';
import NewProduct from './components/Admin/NewProduct';
import { useSelector } from 'react-redux';

// cart imports
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Payment from './components/cart/Payment';
import OrderSuccess from './components/cart/OrderSuccess';
import ListOrders from './components/Order/ListOrders';
import OrderDetails from './components/Order/OrderDetails';
import OrdersList from './components/Order/OrdersList';
import ProcessOrder from './components/Admin/ProcessOrder';







function App() {

  const [stripeApiKey, setStripeApiKey] = useState('')

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripeApiKey() {

      const { data } = await axios.get('/api/v1/stripe/api')
      setStripeApiKey(data.stripeApiKey)

    }

    getStripeApiKey()

  },[])

  const {user, isAuthenticated, loading} = useSelector(state => state.auth)
  
  return (
    <Router>
      <div>
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/cart" component={Cart} exact />
          <ProtectedRoute path="/shipping" component={Shipping} />
          <ProtectedRoute path="/order/confirm" component={ConfirmOrder} />
          <ProtectedRoute path="/success" component={OrderSuccess} />
          {stripeApiKey && 

          <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute path="/payment" component={Payment} />
          </Elements>
          
          }

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute path="/orders/me" component={ListOrders} exact />
          <ProtectedRoute path="/order/:id" component={OrderDetails} exact />

        </div>
          
          <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
          <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductList} exact />
          <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact />
          <ProtectedRoute path="/admin/orders" isAdmin={true} component={OrdersList} exact />
          <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact />

        {!loading && (!isAuthenticated || user.role !== 'admin') && (
          <Footer />
        )}
      </div>
    </Router>
  );
}

export default App;
