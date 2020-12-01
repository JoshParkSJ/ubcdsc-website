import React from 'react';
import Particles from "react-tsparticles";


//this runs once on each page session and makes the particles animation change
var initialAnim = "bounce";

//if (sessionStorage.getItem("initialAnim") == "out") {
//    var initialAnim = "out";
//    sessionStorage.clear();
//} else {
//    var initialAnim = "bounce";
//    setTimeout(function() {
//    sessionStorage.setItem("initialAnim", "out")
//    window.location = window.location;
//  }, 5000);
//}

function ParticlesComponent() {
	return (
		<Particles
				id="tsparticles"
				options={{
					 "detectRetina": false,
					 "interactivity": {
						 "events": {
							 "onClick": {
								 "mode": "push"
							 },
							 "onDiv": {
								 "selectors": "#repulse-div",
								 "mode": "repulse"
							 },
							 "onHover": {
								 "enable": true,
								 "mode": "bubble"
							 }
						 },
						 "modes": {
							 "bubble": {
								 "distance": 50,
								 "duration": 1,
								 "opacity": 8,
								 "size": 12
							 },
							 "grab": {
								 "distance": 400
							 },
							 "slow": {
								 "factor": 1,
								 "radius": 0
							 }
						 }
					 },
					 "particles": {
						 "color": {
							 "value": ["#4285f4", "#34A853", "#FBBC05", "#EA4335"]
						 },
						 "links": {
							 "color": {
								 "value": "random"
							 },
							 "distance": 30,
							 "enable": false,
							 "opacity": 0.3
						 },
						 "move": {
							 "attract": {
								 "rotate": {
									 "x": 600,
									 "y": 1200
								 }
							 },
							 "enable": true,
							 "outModes": {
								 "default": initialAnim,
								 "bottom": initialAnim,
								 "left": initialAnim,
								 "right": initialAnim,
								 "top": initialAnim
							 },
							 "speed": 0.6
						 },
						 "number": {
							 "density": {
								 "area": 1000
							 },
							 "value":350
						 },
						 "opacity": {
							 "value": 1,
							 "animation": {
								 "enable": true,
								 "speed": 1,
								 "minimumValue": 0.2
							 }
						 },
						 "size": {
							 "random": {
								 "enable": true
							 },
							 "value": 7,
							 "animation": {
								 "minimumValue": 0.1,
								 "speed": 40,
								 "enable": false
							 }
						 },
						 "stroke": {
							 "color": {
								 "value": "#000000",
								 "animation": {
									 "enable": false,
									 "speed": 1,
									 "sync": true
								 }
							 }
						 }
					 },
						polygon: {
							 draw: {
								 enable: false,
								 lineColor: "rgba(255,255,255,0.5)",
								 lineWidth: 0.2
							 },
							 enable: true,
							 move: {
								 radius: 5
							 },
							 position: {
								 x: 0,
								 y: -75
							 },
							 inlineArrangement: "equidistant",
							 scale: 0.9,
							 type: "inline",
							 url: "https://cdn.ubcdsc.com/website/dscparticles3.svg"
						 },
						 background: {
							 opacity: "0",
							 image: "",
							 //url('https://cdn.ubcdsc.com/website/dsclogo.png')
							 position: "0px 0px",
							 repeat: "no-repeat",
							 size: "100%"
						 }
				}}
		/>
	);
}

export default ParticlesComponent;
