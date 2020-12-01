import React, { CSSProperties, ReactElement } from "react";
import {Card, CardMedia, CardContent, Typography, Button, Grid} from '@material-ui/core';
import TimeIcon from '@material-ui/icons/AccessTime';
import LocationIcon from '@material-ui/icons/RoomOutlined';
import DescriptionIcon from '@material-ui/icons/FormatAlignLeftOutlined';

import { Event } from "../../types/event";

const styles: { [identifier: string]: CSSProperties } = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  body: {
    textAlign: "left",
    width: "100%",
    backgroundColor: "#17151C",
    color: "white"
  },
  card: {
    display: "inline-block",
    marginBottom: '50px',
    marginTop: '50px',
    width: "100%",
  },
  button: {
    backgroundColor: "#0DF5E3"
  }
};

export default function EventCard(event: Event): ReactElement {
  return (
    <Card style={styles.card}>
      <CardMedia
          component="img"
          alt={event.name}
          height="140"
          image={event.imageSrc}
          title={event.name}
      />
      <CardContent style={styles.body}>
        <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'uppercase'}}>
          {event.name}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>
                <TimeIcon style={{ color: "white" }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" component="p">
                  {event.time} <br/> {event.date}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item>
                <LocationIcon style={{ color: "white" }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" component="p">
                  {event.location}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" wrap="nowrap" spacing={1}>
              <Grid item>
                <DescriptionIcon style={{ color: "white" }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" component="p">
                  {event.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={3} alignItems="flex-end" justify="flex-end">
            <Button style={styles.button} variant="contained" href={event.link}>
              ATTEND
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
