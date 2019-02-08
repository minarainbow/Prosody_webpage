import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles.js'
import SearchBar from 'material-ui-search-bar';
import APIMenu from '../../components/APIMenu';

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
                Tablet
                </div>
              </Button>
            </Link>
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                className={classes.searchBar}/>            
            <Link to="/">
                <IconButton color="action">
                    <HomeIcon  className={classes.mypageIcon} />
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
