//import React from 'react';
import { Link } from "react-router-dom";
import './Toolbar.css'
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import { useContext } from 'react';
import { Store } from "../../Store";

function ToolBar(){const { state, dispatch: ctxDispatch } = useContext(Store);
const { cart, userInfo } = state;

const signoutHandler = () => {
  ctxDispatch({ type: 'USER_SIGNOUT' });
  localStorage.removeItem('userInfo');
  localStorage.removeItem('shippingAddress');
  localStorage.removeItem('paymentMethod');
};
    return (
        <div className="tool-bar">
            <div className="container">
                <Link to="/"><img src="./images/logoadasdasdasdasdasdasd.png" title="Logotipo" alt="logo_tropical" className="logotipo"/></Link>
                <Link to={"/"} className="tool-link"><img src="./images/home.png" alt="home"className="ImgBar" width="51" height="51"/><p className="ImgBar">HOME</p></Link>
                <Link to={"/list"} className="tool-link"><img src="./images/hand-watch.png" alt="hand watch"className="ImgBar" width="52" height="51"/><p>WATCHES</p></Link>

              
                    <Link to={"/cart"}  className="tool-link"><img src="./images/shopping-cart.png" alt="cart"className="ImgBar" widht="51" height="51"/>
                    CART
                    {cart.cartItems.length > 0 && (
                        <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                        </Badge>
                    )}
                    </Link>
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id="basic-nav-dropdown" className="tool-link">
                        <LinkContainer to="/profile" >
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <Link  to="#signout"
                        onClick={signoutHandler}
                        className="tool-link"><img src="./images/user.png" alt="user"className="ImgBar" width="51" height="51"/>
                        Sign Out
                        </Link>
                    </NavDropdown>
                    ) : (
                    <Link to="/signin"  className="tool-link"><img src="./images/user.png" alt="user"className="ImgBar" width="51" height="51"/>
                    
                        Sign In
                    </Link>
                    )}
        
                
            </div>
        </div>
        );
}
export default ToolBar