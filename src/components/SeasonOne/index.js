import React from 'react'
import Header from './Header'
import Epithumb from "../epi_thumb"

function SeasonOne(){
    return(
        <div>
            <Header />
            <Epithumb src="./images/season1/ep1.jpg" title="1. A study in Pink" desc="A woman in pink lies dead in a derelict house.She is the fourth in a series of seemingly impossible suicides." link="/season1/episode1"/>
            <Epithumb src="./images/season1/ep2.jpg" title="2. The Blind Banker" desc=" Mysterious ciphers are appearing on walls all over London and anyone who sees them is dead within hours." link="/season1/episode2"/>
            <Epithumb src="./images/season1/ep3.jpg" title="3. The Great Game" desc="A 20-year-old murder, a blood-soaked car, a rediscovered Old Master worth millions - it's just the kind of adventure Sherlock and John relish" link="/season1/episode3"/>
        </div>
    )
}

export default SeasonOne;