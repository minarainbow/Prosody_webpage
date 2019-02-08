import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import APIMenu from '../../components/APIMenu';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    width: 'auto',
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
    borderBottom: `3px solid ${theme.palette.grey[300]}`,
    textDecoration: 'none',
    outline: 'none',
  },
  mainLogo: {
    height: '50px',
    width: '50px',
    marginRight: '10px',
  },
  mainLogoMobile: {
    height: '40px',
    width: '40px',
    marginRight: '10px',
  },
  toolbarTitle: {
    cursor: 'pointer',
    display: 'flex',
    marginLeft: '2%',
    marginRight: 'auto',
    textDecoration: 'none',
    outline: 'none',
  },
  toolbarTitleMobile: {
    display: 'flex',
    width: '160px',
    marginLeft: '1px',
    marginRight: 'auto',
    textDecoration: 'none',
    outline: 'none',
  },
  logoTitle: {
    fontFamily: 'NanumSquare',
    fontSize: '30px',
  },
  logoTitleMobile: {
    fontFamily: 'NanumSquare',
    fontSize: '24px',
  },
  defaultIcon: {
    fontFamily: 'NanumSquare',
    fontSize: '38px',
    marginLeft: 'auto',
    marginRight: '8px'
  },
  drawerPaper: {
    alignItems: 'left',
    whiteSpace: 'nowrap',
    width: 200,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
})

class APIOperation extends Component {

  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>        
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <Link to = "/"  className={classes.toolbarTitle}>
              <Button >
                <img src = {logo} className = {classes.mainLogo}/>
                <div className={classes.logoTitle} >
                NonMobile
                </div>
              </Button>
            </Link>
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                className={classes.searchBar}/>            
            <Link to="/">
                <IconButton color="action">
                    <HomeIcon  className={classes.defaultIcon} />
                </IconButton>
            </Link>
          </Toolbar>
        <div style={{display: 'flex'}}>
            <APIMenu selectedIndex={1}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles) (APIOperation);
