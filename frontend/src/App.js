import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import HomeScreen from "./Screen/HomeScreen";
import List from "./Screen/List";
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import ProductScreen from "./Screen/ProductScreen";
import { useContext } from 'react';
import { Store } from './Store';
import FootBar from "./components/Components-HomeScreen/FootBar";
import AboutUs from "./Screen/AboutUs";
import CartScreen from "./Screen/CartScreen";
import SigninScreen from './Screen/SigninScreen';
import Help from "./Screen/Help";


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
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
      <header >
        <main>
                <Routes>
                    <Route path="/product/:slug" element={<ProductScreen />}/>
                    <Route path="/list" element={<List />}/>
                    <Route path="/cart" element={<CartScreen />}/>
                    <Route path="/login" element={<SigninScreen />} />
                    <Route path="/about_us" element={<AboutUs />}/>
                    <Route path="/help" element={<Help />}/>
                    <Route path="/" element={<HomeScreen />}/>
                </Routes>
        </main>
      </header>
        <footer> {<FootBar/>}</footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
