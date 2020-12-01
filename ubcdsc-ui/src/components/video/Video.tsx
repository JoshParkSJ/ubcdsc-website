import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '100px',
    textAlign: 'center',
    height: '100%',
    alignItems: "center",
    justify: "center",
  },
  paper: {
    backgroundColor: '#4285f4',
    padding: '10px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '5px 10px rgba(0,0,0,0.1)',
  },
}));

export default function Video() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <iframe width="1000" height="562.5" src="https://www.youtube.com/embed/alMLk_8wIVU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </Paper>
    </div>
  );
}
