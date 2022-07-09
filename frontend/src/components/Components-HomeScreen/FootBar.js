//import React from 'react';
import { Link } from "react-router-dom";
import './FootBar.css'

function FootBar(){
    return (

        <div id="wrapper">
            <div id="Footer">
                <div id="bot_foot">
                    <div className="container">
                        <Link to="/shipping" className="foot-link">POLÍTICA DE ENVIO</Link>
                        <Link to="/refund" className="foot-link">POLÍTICA DE REEMBOLSO</Link>
                        <Link to="/about_us" className="foot-link">SOBRE NÓS</Link>
                        <Link to="/help" className="foot-link">AJUDA</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FootBar
