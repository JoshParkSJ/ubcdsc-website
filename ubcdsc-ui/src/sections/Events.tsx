import { Grid, Typography } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React, { CSSProperties, ReactElement, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import EventCard from "../components/event/EventCard";
import { getEvents } from '../services/eventService';
import {Event} from "../types/event";

const pastEvents: Event[] = [
  {
    id: "1",
		name: "Peer-to-Peer Internship Panel 1 Past",
		date: "Sept 22, 2020",
		time: "4pm - 5pm",
		location: "Zoom",
		description: "Check out this event! Check out this event! Check out this event! Check out this event! Check out this event! Check out this event!",
		imageSrc: "",
		link: "https://dsc.community.dev/events/details/developer-student-clubs-the-university-of-british-columbia-presents-peer-to-peer-internship-panel/#/"
  },
  {
    id: "1",
		name: "Peer-to-Peer Internship Panel 2",
		date: "Sept 22, 2020",
		time: "4pm - 5pm",
		location: "Zoom",
		description: "Check out this event!",
		imageSrc: "",
		link: "https://dsc.community.dev/events/details/developer-student-clubs-the-university-of-british-columbia-presents-peer-to-peer-internship-panel/#/"
  },
  {
    id: "1",
		name: "Peer-to-Peer Internship Panel 3",
		date: "Sept 22, 2020",
		time: "4pm - 5pm",
		location: "Zoom",
		description: "Check out this event!",
		imageSrc: "",
		link: "https://dsc.community.dev/events/details/developer-student-clubs-the-university-of-british-columbia-presents-peer-to-peer-internship-panel/#/"
	},
	{
    id: "1",
		name: "Peer-to-Peer Internship Panel 4",
		date: "Sept 22, 2020",
		time: "4pm - 5pm",
		location: "Zoom",
		description: "Check out this event!",
		imageSrc: "",
		link: "https://dsc.community.dev/events/details/developer-student-clubs-the-university-of-british-columbia-presents-peer-to-peer-internship-panel/#/"
  },
];

const upcomingEvents: Event[] = [
  {
    id: "1",
		name: "Peer-to-Peer Internship Panel 1 Upcoming",
		date: "Sept 22, 2020",
		time: "4pm - 5pm",
		location: "Zoom",
		description: "Check out this event! Check out this event! Check out this event! Check out this event! Check out this event! Check out this event!",
		imageSrc: "",
		link: "https://dsc.community.dev/events/details/developer-student-clubs-the-university-of-british-columbia-presents-peer-to-peer-internship-panel/#/"
  },
  {
    id: "1",
		name: "Peer-to-Peer Internship Panel 2",
		date: "Sept 22, 2020",
		time: "4pm - 5pm",
		location: "Zoom",
		description: "Check out this event!",
		imageSrc: "",
		link: "https://dsc.community.dev/events/details/developer-student-clubs-the-university-of-british-columbia-presents-peer-to-peer-internship-panel/#/"
  },
  {
    id: "1",
		name: "Peer-to-Peer Internship Panel 3",
		date: "Sept 22, 2020",
		time: "4pm - 5pm",
		location: "Zoom",
		description: "Check out this event!",
		imageSrc: "",
		link: "https://dsc.community.dev/events/details/developer-student-clubs-the-university-of-british-columbia-presents-peer-to-peer-internship-panel/#/"
	},
	{
    id: "1",
		name: "Peer-to-Peer Internship Panel 4",
		date: "Sept 22, 2020",
		time: "4pm - 5pm",
		location: "Zoom",
		description: "Check out this event!",
		imageSrc: "",
		link: "https://dsc.community.dev/events/details/developer-student-clubs-the-university-of-british-columbia-presents-peer-to-peer-internship-panel/#/"
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const styles: { [identifier: string]: CSSProperties } = {
	eventCardContainer: {
		padding: 10
	}
}

export default function Events(): ReactElement {
    const [alignment, setAlignment] = React.useState<string | null>('upcomingEvents');

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        setAlignment(newAlignment);
    };

    let events;
    if (alignment=="upcomingEvents") {
        events = upcomingEvents;
    }
    else {
        events = pastEvents;
    }

    useEffect(() => {
      console.log(getEvents());
    }, [])

    return (
      <>
        <div id="events">
          <Grid container spacing={0} direction="column" alignItems="center" justify="center">
            <Typography variant="h3" style={{color: "white"}}>
              Events and Workshops
            </Typography>
            <Typography gutterBottom variant="h4" style={{background: "linear-gradient(90deg, #439CFB 0%, #F187FB 73.34%)", WebkitBackgroundClip: "text", color: "transparent"}}>
              Come learn, share and connect with us in person
            </Typography>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
            >
              <ToggleButton value="upcomingEvents" style={{ outlineStyle: "solid", outlineColor: "#0DF5E3", outlineWidth: alignment=="upcomingEvents" ? 1 : 0, backgroundColor: alignment=="upcomingEvents" ? "#17151C" : "#3C3844" }}>
                <Typography variant="body2" component="p" style={{ color: alignment=="upcomingEvents" ? "white" : "#AFABB9" }}>
                  UPCOMING EVENTS
                </Typography>
              </ToggleButton>
              <ToggleButton value="pastEvents" style={{ outlineStyle: "solid", outlineColor: "#0DF5E3", outlineWidth: alignment=="pastEvents" ? 1 : 0, backgroundColor: alignment=="pastEvents" ? "#17151C" : "#3C3844" }}>
                <Typography variant="body2" component="p" style={{ color: alignment=="pastEvents" ? "white" : "#AFABB9" }}>
                  PAST EVENTS
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Carousel
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {events.map((event: Event) => (
                <div style={styles.eventCardContainer}>
                    <EventCard {...event} />
                </div>
            ))}
          </Carousel>
        </div>
      </>
    );
}