import React  from "react";
import { Stream } from "@cloudflare/stream-react";
import "../../App.css"
import {Link} from "react-router-dom";

function StreamPlayer(props){
    const VideoId = props.id;
    const title = props.title;
    const descr = props.descr;
    return(
        <div id="player">
            <Stream controls src={VideoId} poster="https://images2.alphacoders.com/509/thumb-1920-509099.jpg" />
            <h4 id="playing_title">{title}</h4>
            <p id="playing_descr">{descr}</p>
            <Link id="prev-navigator" to={props.prev}>Prev</Link>
            <Link id="next-navigator" to={props.next}>Next</Link>
            <br></br><Link id="home-navigator" to="/sherlock">Back to home</Link>

        </div>
    )
}
export default StreamPlayer;

