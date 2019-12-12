import React from "react";
import "./style.css";

const Card = props => (
    <div className="card img-container hvr-bounce-in">
        <img className="img-responsive" src={props.image} id={props.id} alt={props.name}
            onClick={() => props.runGame(props.id)} />
    </div>
);
  
export default Card;
