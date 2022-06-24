//import React from 'react';
import { Link } from "react-router-dom";
import './FootBar.css'

function FootBar(){
    return (

        <div id="wrapper">
            <div id="Footer">
                <div id="bot_foot">
                    <div className="container">
                        <Link to="/shipping" className="foot-link">SHIPPING POLICY</Link>
                        <Link to="/refund" className="foot-link">REFUND POLICY</Link>
                        <Link to="/about_us" className="foot-link">ABOUT US</Link>
                        <Link to="/help" className="foot-link">HELP</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FootBar
