import React from "react"
import logo from "./logo512.png"
export default function Header () {
    return (
    <nav>
        <div className="nav-div"><img src={logo} className="nav-img"  alt="img"></img><p className="nav-text">ReactFacts</p></div>
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    )
}
