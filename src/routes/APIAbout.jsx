import React, {Component} from 'react';
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
import {sections, APIfeatures, prices} from '../scripts';
import scrollToComponent from 'react-scroll-to-component';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles.js'
import SearchBar from 'material-ui-search-bar';
import APITable from '../APITable';

class APIAbout extends Component {

  state = {
    containerZoom: false,
    featureZoom: {title: '', state: false},
    priceZoom: {title: '', state: false},
    redirect: false,
    selectedIndex: 0,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () =>{
    if(this.state.redirect){
      return <Redirect to='/'/>
    }
  }

  scrollToDiv = (title) => {
    switch(title){
      case 'API 개요':
        scrollToComponent(this.featureContainer);
        break;
      case '다운로드':
        scrollToComponent(this.featureContainer);
        break;
      case '가격정책':
        scrollToComponent(this.priceContainer);
        break;
      case '지원 및 문의':
        scrollToComponent(this.priceContainer);
        break;
    }
  };


  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>        
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <Link to = "/"  className={classes.toolbarTitleTablet}>
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
            <div className={classes.mypageMenu}>
                <List component="nav">
                    <Link to="/mypage/profile" style={{textDecoration: 'none', outline: 'none',}}>
                        <ListItem
                        button
                        selected={this.state.selectedIndex === 0}
                        onClick={event => this.handleListItemClick(event, 0)}
                        >
                        <ListItemText primary="API 소개" />
                        </ListItem>
                    </Link>
                    <Divider />
                    <ListItem
                    button
                    selected={this.state.selectedIndex === 1}
                    onClick={event => this.handleListItemClick(event, 1)}
                    >
                        <ListItemText primary="운영정책" />
                    </ListItem>
                    <Divider />
                    <ListItem
                    button
                    selected={this.state.selectedIndex === 2}
                    onClick={event => this.handleListItemClick(event, 2)}
                    >
                        <ListItemText primary="F&Q" />
                    </ListItem>
                    <Divider />
                    <ListItem
                    button
                    selected={this.state.selectedIndex === 3}
                    onClick={event => this.handleListItemClick(event, 3)}
                    >
                        <ListItemText primary="이용약관" />
                    </ListItem>
                    <Divider />
                </List>
            </div>
            <APITable />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles) (APIAbout);
