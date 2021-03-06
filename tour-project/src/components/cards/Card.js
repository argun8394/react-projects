import React from 'react';
import { data } from "../../helpers/Data";
import "./Card.css";


function Card() {
    return (
        <div className="card-container">
            {data.map((card) => {
                return (

                    <div className="cards" key={card.id}>
                        <div className="title">
                            <h2>{card.title}</h2>
                        </div>
                        <img src={card.image} alt={card.title} />
                        <div className="card-over">
                            <p>{card.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;




{/* 
// tektek döndürme işlemi
function Card(){
    return (
        <div className="card-container">
            <div className="cards">
                <div className="title">
                    <h2>{data[0].title}</h2>
                </div>

                <img src={data[0].image} alt={data[0].title}/>

                <div className="card-over">
                    <p>{data[0].desc}</p>
                </div>
            </div>
            <div className="cards">
                <div className="title">
                    <h2>{data[1].title}</h2>
                </div>

                <img src={data[1].image} alt={data[1].title}/>

                <div className="card-over">
                    <p>{data[1].desc}</p>
                </div>
            </div>
            .
            .
            .
            .

        </div>
    );

};
*/}
