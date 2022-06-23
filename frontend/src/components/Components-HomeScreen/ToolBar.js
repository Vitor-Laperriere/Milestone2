//import React from 'react';
import { Link } from "react-router-dom";
import './Toolbar.css'

function ToolBar(){
    return (
        <div className="tool-bar">
            <div className="container">
                <Link to="/"><img src="./images/logoadasdasdasdasdasdasd.png" title="Logotipo" alt="logo_tropical" className="logotipo"/></Link>
                <Link to={"/"} className="tool-link"><img src="./images/home.png" alt="home"className="ImgBar" width="51" height="51"/><p className="ImgBar">HOME</p></Link>
                <Link to={"/list"} className="tool-link"><img src="./images/hand-watch.png" alt="hand watch"className="ImgBar" width="52" height="51"/><p>WATCHES</p></Link>
                <Link to={"/cart"} className="tool-link"><img src="./images/shopping-cart.png" alt="cart"className="ImgBar" widht="51" height="51"/><p>CART</p></Link>
                <Link to={"/login"} className="tool-link"><img src="./images/user.png" alt="user"className="ImgBar" width="51" height="51"/><p>LOGIN</p></Link>
            </div>
        </div>
        );
}
export default ToolBar