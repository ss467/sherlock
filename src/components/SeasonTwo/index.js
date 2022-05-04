import React from 'react'
import Header from './Header'
import Epithumb from "../epi_thumb"

function SeasonOne(){
    return(
        <div>
            <Header />
            <Epithumb src="/sherlock/images/season2/ep1.jpg" title="1.A Scandal in Belgravia" desc="A Royal scandal, a dazzling game of cat and mouse. The seductive Irene Adler is cold, calculating, brilliant. Has Sherlock finally met his match?"link="/sherlock/season2/episode1"/>
            <Epithumb src="/sherlock/images/season2/ep2.jpg" title="2. The Hounds of Baskerville" desc="Sherlock's most famous case. A Hound from Hell. A terrified man." link="/sherlock/season2/episode2"/>
            <Epithumb src="/sherlock/images/season2/ep3.jpg" title="3. The Reichenbach Fall" desc="The Tower of London, Pentonville Prison, the Bank of England. All broken into on the same day! Only James Moriarty could do it." link="/sherlock/season2/episode3"/>
        </div>
    )
}

export default SeasonOne;