import { Link } from 'react-router-dom';
import './Toolbar.css';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from '../../Store';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function ToolBar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    window.location.href = '/signin';
    localStorage.removeItem('paymentMethod');
  };
  return (
    <div className="tool-bar">
      <div className="container">
        <Link to="/" >
          <img
            src="./images/logoadasdasdasdasdasdasd.png"
            title="Logotipo"
            alt="logo_tropical"
            className="logotipo"
          />
        </Link>
       
        <Link to={'/list'} className="tool-link">
          <img
            src="./images/hand-watch.png"
            alt="hand watch"
            className="ImgBar"
            width="52"
            height="51"
          />
          <p>WATCHES</p>
        </Link>

        <Link to={'/cart'} className="tool-link">
          <img
            src="./images/shopping-cart.png"
            alt="cart"
            className="ImgBar"
            widht="51"
            height="51"
          />
          CART
          {cart.cartItems.length > 0 && (
            <Badge pill bg="danger">
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </Badge>
          )}
        </Link>
        {userInfo ? (
          <NavDropdown
            title={userInfo.name}
            id="basic-nav-dropdown"
            className="tool-link"
          >
            <LinkContainer to="/profile">
              <NavDropdown.Item>User Profile</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/orderhistory">
              <NavDropdown.Item>Order History</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <Link to="#signout" onClick={signoutHandler} className="tool-link">
              <img
                src="./images/user.png"
                alt="user"
                className="ImgBar"
                width="31"
                height="31"
              />
              <br></br>
              Sign Out
            </Link>
          </NavDropdown>
        ) : (
          <Link to="/signin" className="tool-link">
            <img
              src="./images/user.png"
              alt="user"
              className="ImgBar"
              width="51"
              height="51"
            />
            LOGIN
          </Link>
        )}
        <div>
          {userInfo && userInfo.isAdmin && (
            <NavDropdown className="tool-link" title="Admin" id="admin-nav-dropdown">
              <LinkContainer to="/admin/dashboard">
                <NavDropdown.Item>Dashboard</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/products">
                <NavDropdown.Item>Products</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/orders">
                <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/users">
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          )}
        </div>
      </div>
    </div>
  );
}
export default ToolBar;
