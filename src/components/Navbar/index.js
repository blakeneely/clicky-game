import React from "react";
import "./style.css";

const Navbar = props => {
    return (
    <nav className="navbar sticky-top text-center">
        <div className="order-0">
            <img src="/images/star_wars_logo.png" height="60" width="90" className="d-inline-block align-top"></img>
            <h4 className="nav-text">Clicky-Game</h4>
        </div>
        <div className="order-1">
            <h4 className="nav-text status">{props.status}</h4>
        </div>
        <div className="order-2">
            <h4 className="nav-text pr-1">Score: {props.score}</h4>
        </div>
    </nav>

    )
};

export default Navbar;
