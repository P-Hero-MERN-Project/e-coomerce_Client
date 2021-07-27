import { useEffect } from 'react';
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



function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  },[])

  const {user, loading} = useSelector(state => state.auth)
  
  return (
    <Router>
      <div>
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />

        </div>
        
          <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
          <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductList} exact />
          <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact />

        {/* {!loading && user.role !== 'admin' && (
          <Footer />
        )} */}
      </div>
    </Router>
  );
}

export default App;
