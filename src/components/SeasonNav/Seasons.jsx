import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"

function Seasons(){
    return(
        <div>
           <div id="seasons_cat"><Link to="/sherlock/season1"><span><h3 id='season1'>Season 1</h3></span><span><img id='season1thumbnail' src="https://i.ibb.co/pKDhcN2/season1.png" alt="season_1" /></span></Link></div>
           <div id="seasons_cat2"><Link  to="/sherlock/season2"><span><h3 id='season2'>Season 2</h3></span><span><img id='season2thumbnail' src="https://i.ibb.co/HrrwmYL/season2.png" alt="season_2" /></span></Link> </div> 
           <div id="seasons_cat3"><Link  to="/sherlock/season3"><span><h3 id='season3'>Season 3</h3></span><span><img id='season3thumbnail' src="https://i.ibb.co/tMqtBYJ/season3.png" alt="season_3" /></span></Link> </div> 
           <div id="seasons_cat4"><Link  to="/sherlock/season4"><span><h3 id='season4'>Season 4</h3></span><span><img id='season4thumbnail' src="https://i.ibb.co/gDrWCPG/season4.png" alt="season_4" /></span></Link> </div> 
        </div>
    )
}
export default Seasons;