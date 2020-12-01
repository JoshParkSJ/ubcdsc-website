import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: 'transparent',
    color: "#fff",
    marginBottom: theme.spacing(10),
    marginTop: '-10px',
    boxShadow: '0px 0px',
    zindex: 2,
  },
  mainFeaturedPostContent: {
    position: 'relative',
    textAlign: 'left',
  },
  button: {
    position: 'relative',
    textAlign: 'center',
    marginTop: '10px',
    backgroundColor: '#3456cb',
    color: '#fff',
    padding: 5,
    boxShadow: '0px 15px 10px rgba(0,0,0,0.1)',
  },
  red: {
    color: '#E1382B',
  },
  blue: {
    color: '#557DBF',
  },
  green: {
    color: '#189E59',
  },
  yellow: {
    color: '#FBBC12',
  },
  dull: {
    color: 'rgba(255,255,255,0.9)',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
}));

function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
    >
      <div />
      <Grid container>
        <Grid item md={10}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography variant="h4" color="rgba(255,255,255,1)" gutterBottom>
              Developers Student Club
            </Typography>
            <Typography variant="h5" color="rgba(255,255,255,1)" gutterBottom>
              University of British Columbia
            </Typography>
            <Typography variant="h6" className={classes.dull} paragraph style={{marginTop: '30px'}}>
              DSC is a <span className={classes.blue}>G</span> <span className={classes.red}>o</span> <span className={classes.yellow}>o</span> <span className={classes.blue}>g</span> <span className={classes.green}>l</span> <span className={classes.red}>e</span> Developers program for university students to learn <span className={classes.yellow}>mobile</span> and <span className={classes.blue}>web development skills</span>, <span className={classes.red}>design thinking skills</span> and <span className={classes.green}>leadership skills</span>.
            </Typography>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfKH0oh_ZZXqBzQ09xw18z-9In2_YV5h4npwOLg2SHebfm6jg/viewform" >
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.button}
              >
                <GroupAddIcon className={classes.extendedIcon} />
                Join The Club !
              </Fab>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainFeaturedPost;
