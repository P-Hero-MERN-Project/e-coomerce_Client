import './App.css';
import AdminDashboardPage from './components/Admin/AdminDashboardPage';
import AdminLoginPage from './components/Admin/AdminLoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/admin/login">
<AdminLoginPage/>
        </Route>
        <Route  path="/admin/dashboard">
<AdminDashboardPage/>
        </Route>
        </Switch>
    </Router>
   
  );
}

export default App;
