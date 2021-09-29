import React from 'react';
import {data} from "../../helpers/Data";
import "./Card.css";

function Card(){
    return (
        <div className="card-container">
            <div className="cards">
                <h2>{data[0].title}</h2>
            </div>
            <img src={data[0].image} alt={data[0].title}/>
            
        </div>
    );

};
export default Card;