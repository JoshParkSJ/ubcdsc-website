import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Particles from './particles/Particles';
import MainFeaturedPost from './MainFeaturedPost';
import Box from '@material-ui/core/Box';
import { positions } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    alignItems: "center",
    justify: "center",
  },
  child: {
    position: 'relative',
    margin: 'auto',
    paddingLeft: 5,
    textAlign: 'center',
    color: '#fff',
  },
  box: {
    position: "relative",
    marginTop: '30px',
    marginLeft: '12%',
    width: '70%',
    height: '10px',
    alignItems: "center",
    justify: "center",
    textAlign: 'center',
    boxShadow: '0px 0px 70px rgba(0,0,0,0.7), rgba(0,0,0,0.1) 0 2px 30px inset',
    color: 'transparent',
    backgroundColor: 'transparent',
    pointerEvents: 'none',
    borderRadius: '30%',
  },
}));

export default function HomeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{paddingTop: '12%' }}>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.child}>{<Particles />}</div>
          <Box className={classes.box}>
            01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001
          </Box>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.child}>{<MainFeaturedPost />}</div>
        </Grid>
      </Grid>
    </div>
  );
}
