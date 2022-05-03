import React  from "react";
import {Link} from "react-router-dom";

function epi_thumb(props) {
    return (
        <div className="epi_thumb">
            <img id="episode_thumbnail" src={props.src} alt={props.alt} />
            <div className="epi_thumb_info">
                <h3 id="episode_title">{props.title}</h3>
                <p id="episode_descr">{props.desc}</p>
                <Link to={props.link} id="watch_now" >Watch Now</Link>
            </div>
        </div>
    );
}

export default epi_thumb;