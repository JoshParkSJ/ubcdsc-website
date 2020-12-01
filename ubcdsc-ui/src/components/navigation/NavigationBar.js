import React, { Component } from 'react';
import { Link } from "react-scroll";
import AppBar from '@material-ui/core/AppBar';
import Grid from "@material-ui/core/Grid";
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import './NavigationBar.css'

const FooterItems = [
  {
    title: 'Home',
    link: 'home',
    cName: 'nav-list-item'
  },
  {
    title: 'Events',
    link: 'events',
    cName: 'nav-list-item'
  },
  {
    title: 'Projects',
    link: 'projects',
    cName: 'nav-list-item'
  },
  {
    title: 'Team',
    link: 'team',
    cName: 'nav-list-item'
  },
  {
    title: 'Contact',
    link: 'contact',
    cName: 'nav-list-item'
  }
]

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

class NavigationBar extends Component {
  state = {clicked: false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <React.Fragment>
        <HideOnScroll {...this.props}>
          <div className="nav-gradient">
            <AppBar
            style={{background: 'linear-gradient(to top, transparent, transparent)', boxShadow: 'none'}}
            >
              <Toolbar>
                <Grid
                  justify="space-between"
                  container
                  spacing={24}
                >
                  <Grid item>
                    <img className="nav-icon" src="images/icon_white.png" alt="DSC Icon"/>
                  </Grid>

                  <Grid item>
                    <div className="menu-icon" onClick={this.handleClick}>
                      <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                      {FooterItems.map((item, index) => {
                        return(
                          <li key={index} className={item.cName}>

                            <Link to={item.link} spy={true} smooth={true} style={{textDecoration: "none"}}>
                              <a className={item.cName}>
                                {item.title}
                              </a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </div>
        </HideOnScroll>
        <Toolbar />
      </React.Fragment>
    );
  }
}

export default NavigationBar;
