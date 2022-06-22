import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import HomeScreen from "./Screen/HomeScreen";
import List from "./Screen/List";
import Cart from "./Screen/Cart";
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Login from "./Screen/Login";
import ProductScreen from "./Screen/ProductScreen";
import { useContext } from 'react';
import { Store } from './Store';
import {Container} from "react-bootstrap";


function App() {
    const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav>
      <header >
        <main>
          <Routes>
              <Route path="/" element={<HomeScreen />}/>
              <Route path="/product/:slug" element={<ProductScreen />}/>
              <Route path="/list" element={<List />}/>
              <Route path="/cart" element={<Cart />}/>
             <Route path="/login" element={<Login />}/>
          </Routes>
        </main>
      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;
