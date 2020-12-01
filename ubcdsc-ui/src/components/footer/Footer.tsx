import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#17151c',
    padding: '50px',
    marginTop: '100px',
    color: '#fff',
    height: '200px',
  },
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer} style={{background: 'linear-gradient(to bottom, transparent, #17151c)', boxShadow: 'none'}}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          DSC UBC
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
        >
          footer info
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
