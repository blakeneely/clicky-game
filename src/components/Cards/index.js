import React from "react";
import "./style.css";

const Card = props => (
    <div className="card img-container hvr-bounce-in">
        <img alt={props.name} src={window.location.origin + props.name} id={props.id}
            onClick={() => props.runGame(props.id)} />
    </div>
);
  
export default Card;
