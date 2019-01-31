import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import logo from '../images/logo.png';
import scrollToComponent from 'react-scroll-to-component';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles.js'
import SearchBar from 'material-ui-search-bar';
import APIMenu from './APIMenu';

class API extends Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <Link to="/" className={classes.toolbarTitle}>
              <Button >
                <img src={logo} className={classes.mainLogo} />
                <div className={classes.logoTitle} >
                  Tablet
                </div>
              </Button>
            </Link>
            <SearchBar
              onChange={() => console.log('onChange')}
              onRequestSearch={() => console.log('onRequestSearch')}
              className={classes.searchBar} />
            <Link to="/">
              <IconButton color="action">
                <HomeIcon className={classes.mypageIcon} />
              </IconButton>
            </Link>
          </Toolbar>
          <APIMenu selectedIndex={0}/>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(API);
