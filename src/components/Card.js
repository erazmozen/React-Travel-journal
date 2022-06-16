import React from "react";
import natureimg from "../img/preview1.jpg"


export default function Card(props) {
    return (
        <section className="card--container">
            <img src={props.imageUrl}></img>
            <div className="card--info">
                <div className="card--title">
                    <h1>{props.location}</h1>
                    <h3>{props.title}</h3>
                </div>
                   
                    <small>{props.startDate} - {props.endDate}</small>
                    <p>{props.description}</p>
            </div>
        </section>
    )
}