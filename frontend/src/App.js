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
import FootBar from "./components/Components-HomeScreen/FootBar";
import ToolBar from "./components/Components-HomeScreen/ToolBar";
import PaymentMethodScreen from "./Screen/PaymentMethodScreen";

function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header >
            <ToolBar/> <br/><br/>
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
                    <Route path="/payment" element={<PaymentMethodScreen />}/>
                    <Route path="/shipping" element={<ShipPoli />}/>
                    <Route path="/refund" element={<RefundPoli />}/>
                    <Route path="/" element={<HomeScreen />}/>
                </Routes>
            </main>
        </header>
        <FootBar />
    </div>
  </BrowserRouter>
  );
}

export default App;
