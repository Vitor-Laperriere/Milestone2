//import React from 'react';
import { Link } from "react-router-dom";
import './Toolbar.css'
function ToolBar(){
    return (
        <div class="tool-bar">
            <Link to="/"><img src="./images/logoadasdasdasdasdasdasd.png" title="Logotipo" alt="logo_tropical" className="logotipo"/></Link>
            <Link to={"/"} class="tool-link"><img src="./images/home.png" alt="home"class="ImgBar" width="51" height="51"/><p class="ImgBar">HOME</p></Link>
            <Link to={"/list"} class="tool-link"><img src="./images/hand-watch.png" alt="hand watch"class="ImgBar" width="52" height="51"/><p>WATCHES</p></Link>
            <Link to={"/cart"} class="tool-link"><img src="./images/shopping-cart.png" alt="cart"class="ImgBar" widht="51" height="51"/><p>CART</p></Link>
            <Link to={"/login"} class="tool-link"><img src="./images/user.png" alt="user"class="ImgBar" width="51" height="51"/><p>LOGIN</p></Link>
        </div>
        );
}
export default ToolBar