import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import ShipPoli from "./Screen/ShipPoli";
import RefundPoli from "./Screen/RefundPoli";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import ShippingAddressScreen from "./Screen/ShippingAddressScreen";
import SignupScreen from "./Screen/SignupScreen";

function App() {const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
  };
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
      <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
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
