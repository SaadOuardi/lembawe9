import React from 'react'
import { Main } from "../../sections/Main/Main";
import { Events } from "../../sections/Events/Events";
import { Music } from "../../sections/Music/Music";
import { Contact } from "../../sections/Contact/Contact";
import { Merch } from "../../sections/Merch/Merch";
const Home = () => {
    return (
        <main>
            <Main/>
            <Events/>
            <Music/>
            <Contact/>
            <Merch/>
        </main>
    )
}

export default Home