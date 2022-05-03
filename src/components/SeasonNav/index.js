import React from 'react'
import Header from './Header'
import Seasons from './Seasons'
import HeroBack from '../../containers/HeroBack'

function SeasonNav(){
    return(
        <div>
            <HeroBack />
            <section id="seasons">
            <Header id = "header_info"/>
            <Seasons  />
            </section>
        </div>
    )
}

export default SeasonNav;