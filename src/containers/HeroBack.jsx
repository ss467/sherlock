import React from "react";
import "../../src/App.css"
import {Link} from "react-router-dom";

function HeroBack(){
    return(
        <div>
            <section id="hero_back">
            <h1 id="hero_title">Sherlock Holmes</h1>
            <p id="hero_descr">Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.</p>
            <Link to="#" id="hero_button">Read more</Link>
            </section>
        </div>
    )
}

export default HeroBack;