//import React from 'react';
import { Link } from "react-router-dom";
import './FootBar.css'
function FootBar(){
    return (
        <div id="Footer">
            <div id="bot_foot">
                <div class="container">
                    <Link to="/shipping" class="foot-link">SHIPPING POLICY</Link>
                    <Link to="/refund" class="foot-link">REFUND POLICY</Link>
                    <Link to="/contact" class="foot-link">CONTACT US</Link>
                    <Link to="/about_us" target="_blank" class="foot-link">ABOUT US</Link>
                    <Link to="/help" class="foot-link">HELP</Link>
                </div>
            </div>
        </div>
        );
}
export default FootBar
