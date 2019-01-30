import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import logo from '../images/logo.png';
import { sections, APIfeatures, prices } from '../scripts';
import scrollToComponent from 'react-scroll-to-component';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles.js'
import Login from '../LoginDialog.jsx';
import MypageMenu from './MypageMenu';


class Mypage extends Component {

  state = {
    selectedIndex: 0,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <Link to="/" className={classes.toolbarTitleTablet}>
              <Button >
                <img src={logo} className={classes.mainLogo} />
                <div className={classes.logoTitle} >
                  Tablet
                </div>
              </Button>
            </Link>

            <Link to="/">
              <IconButton color="action">
                <HomeIcon className={classes.mypageIcon} />
              </IconButton>
            </Link>
          </Toolbar>
          <MypageMenu />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Mypage);
