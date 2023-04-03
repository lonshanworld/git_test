import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Nav(props){
    return(
        <div id="navdiv">
            <div id="forextraspace"></div>
            <svg id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 55.875644108553786,232.1490896599107 111.75128821710757,264.2981793198214 186,267 C 260.2487117828924,269.7018206801786 352.87049124012356,242.9563723806252 436,242 C 519.1295087598764,241.0436276193748 592.766746822398,265.8763311576778 655,267 C 717.233253177602,268.1236688423222 768.062521470285,245.53830298866367 834,207 C 899.937478529715,168.46169701133633 980.9831672964619,113.97045688766747 1042,129 C 1103.016832703538,144.02954311233253 1144.0048093438681,228.57986946066643 1207,252 C 1269.9951906561319,275.42013053933357 1354.997595328066,237.71006526966679 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#333333" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
            <nav>
                <div id="icon">
                    <div><i className="fa-brands fa-opencart"></i></div>
                    <span>Fashion Shop</span>
                </div>
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }}><li className="hoverchange">Home</li></Link>
                    <Link to="/shop" style={{ textDecoration: 'none' }}><li className="hoverchange">Shop</li></Link>
                    <Link to="/cart" style={{ textDecoration: 'none' }}><li className="hoverchange" id="cartli"><div>
                        <span id="cartlength">{props.cartlength > 0 ? props.cartlength : ""}</span>
                        Cart
                    </div></li></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;