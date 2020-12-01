import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import HomeGrid from "../components/home/Home";
import AboutGrid from "../components/about/About";
import HomeVideo from "../components/video/Video";

function About() {
	return (
		<div>
		    <Container>
                <HomeGrid />
                <AboutGrid />
                <HomeVideo />
            </Container>
		</div>
	);
}

export default About;
