import React from 'react'
import Header from './Header'
import Epithumb from "../epi_thumb"

function SeasonOne(){
    return(
        <div>
            <Header />
            <Epithumb src="/images/season3/ep1.jpg" title="1. The Empty Hearse" desc="Two years after Sherlock's 'death', Dr John Watson has got on with his life." link="/sherlock/season3/episode1"/>
            <Epithumb src="/images/season3/ep2.jpg" title="2. The Sign of Three" desc="Sherlock faces his biggest challenge of all - delivering a Best Man's speech on John wedding day" link="/sherlock/season3/episode2"/>
            <Epithumb src="/images/season3/ep3.jpg" title="3. The Great Game" desc="A case of stolen letters leads Sherlock Holmes into a long conflict with Charles Augustus Magnussen, the Napoleon of blackmail, and the one man he truly hates." link="/sherlock/season3/episode3"/>
        </div>
    )
}

export default SeasonOne;