import React from "react";
import "./style.css";

const Navbar = props => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand order-0" href="#">Navbar w/ text</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <span className="navbar-text order-1 gameScore">
                {props.status}
            </span>
            <span className="navbar-text order-2 gameScore">
                Score: {props.score} Won: {props.won}
            </span>
        </div>
    </nav>

    )
};

export default Navbar;
