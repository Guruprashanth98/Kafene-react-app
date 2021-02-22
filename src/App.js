import logo from './logo.svg';
import './App.css';
import Order from './pages/Order'
import Product from './pages/Product'
import Users from './pages/Users'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar'
import Login from './pages/Login'
import ProtectedRoute from './Authentication/ProtectedRoute'
import LogInRedirect from './Authentication/LogInRedirect'
import OrderDetail from './pages/OrderDetail';
import productDetail from './pages/ProductDetail'

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <LogInRedirect path="/" exact Component={Login} />
        <ProtectedRoute exact path="/order" Component={Order} />
        <ProtectedRoute exact path="/order/:orderID" Component={OrderDetail} />
        <ProtectedRoute exact path="/product/:productID" Component={productDetail} />
        <ProtectedRoute exact path="/product" Component={Product} />
        <ProtectedRoute exact path="/users" Component={Users} />
      </Switch> 
  </Router>
  );
}

export default App;
