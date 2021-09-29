import React from 'react';
import {data} from "../../helpers/Data";
import "./Card.css";

function Card(){
    return (
        <div className="card-container">
            <div className="cards">
                <h2>{data[0].title}</h2>
            </div>
            
        </div>
    );

};
export default Card;