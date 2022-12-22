import React from 'react'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import { BrowserRouter as Router,Routes as Switch,Route, Navigate} from 'react-router-dom';
import Success from './pages/Success.jsx'
import { useSelector } from "react-redux";

function App() {
  const user= useSelector((state) => state.user?.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={ user?<Navigate to="/"/>:<SignIn />}/>
        <Route path="/register" element={ user?<Navigate to="/"/>:<Register />}/> 
        <Route path="/success" element={<Success />}/> 
      </Switch>
    </Router>
  )
}

export default App