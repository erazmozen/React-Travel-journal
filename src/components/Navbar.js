import React from "react";
import globe from "../img/globe.png"

export default function Navbar() {
    return (
        <section className="navbar--container">
            <img src={globe} />
            <h1>Travel Journal</h1>
        </section>
    )
}