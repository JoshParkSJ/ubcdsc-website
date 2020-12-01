import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 'auto',
    alignItems: "center",
    justify: "center",
    marginBottom: '0px',
    marginTop: '-50px',
  },
  header: {
    textAlign: 'center',
    color: "#fff",
  },
  cardRoot: {
    minWidth: 275,
    marginTop: '30px',
    padding: '10px',
    textAlign: 'center',
    color: '#fff',
    height: "90%",
    backgroundColor: '#3456cb',
    boxShadow: '5px 10px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  box: {
    position: 'relative',
    margin: '0px',
    height: '100%',
  },
}));

export default function AboutGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={5}>
        {/*
        <Grid item xs={12}>
          <Box borderTop={0} borderColor="#fff" className={classes.box}>
            <Typography variant="h4" className={classes.header}>
                Opportunities DSC Provides for Students
            </Typography>
          </Box>
        </Grid>
        */}
        <Grid item xs={4}>
          <Box borderTop={5} borderColor="#EA4335" className={classes.box}>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Concept of DSC
                </Typography>
                <Typography variant="body2" component="p">
                  <br/>
                  The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box borderTop={5} borderColor="#34A853" className={classes.box}>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Why DSC?
                </Typography>
                <Typography variant="body2" component="p">
                  <br/>
                  For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box borderTop={5} borderColor="#FBBC05" className={classes.box}>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Target audience
                </Typography>
                <Typography variant="body2" component="p">
                  <br/>
                  DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
