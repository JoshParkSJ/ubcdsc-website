import React from 'react';
import About from "../sections/About";
import Contact from "../sections/Contact";
import Events from "../sections/Events";
import Projects from "../sections/Projects";
import Team from "../sections/Team";

function Home() {
	return (
	    <div id="home">
            <About />
            <Events />
            <Projects />
            <Team />
            <Contact />
        </div>
	);
}

export default Home;