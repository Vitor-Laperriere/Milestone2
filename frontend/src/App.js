import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from "./Screen/HomeScreen";
import List from "./Screen/List";

import ProductScreen from "./Screen/ProductScreen";

import AboutUs from "./Screen/AboutUs";
import CartScreen from "./Screen/CartScreen";
import SigninScreen from './Screen/SigninScreen';
import Help from "./Screen/Help";
import ShipPoli from "./Screen/ShipPoli";
import RefundPoli from "./Screen/RefundPoli";

import ShippingAddressScreen from "./Screen/ShippingAddressScreen";
import SignupScreen from "./Screen/SignupScreen";

function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
      
      <header >
        <main>
                <Routes>
                    <Route path="/product/:slug" element={<ProductScreen />}/>
                    <Route path="/list" element={<List />}/>
                    <Route path="/cart" element={<CartScreen />}/>
                    <Route path="/signin" element={<SigninScreen />} />
                    <Route path="/signup" element={<SignupScreen />} />
                    <Route path="/ShippingAddressScreen" element={<ShippingAddressScreen />}/>
                    <Route path="/about_us" element={<AboutUs />}/>
                    <Route path="/help" element={<Help />}/>
                    <Route path="/shipping" element={<ShipPoli />}/>
                    <Route path="/refund" element={<RefundPoli />}/>
                    <Route path="/" element={<HomeScreen />}/>
                </Routes>
        </main>
      </header>
       
    </div>
  </BrowserRouter>
  );
}

export default App;
