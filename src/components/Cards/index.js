import React from "react";
import "./style.css";

const Card = props => (
    <div className="card img-container hover hvr-bounce-in">
        <img alt={props.name} src={props.image} id={props.id}
            onClick={() => props.runGame(props.id)} />
    </div>
);
  
export default Card;
