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
import Login from '../LoginDialog.jsx';


class Mypage extends Component {

  state = {
    containerZoom: false,
    featureZoom: {title: '', state: false},
    priceZoom: {title: '', state: false},
    redirect: false,
    selectedIndex: 1,
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

  containerMouseState = (classes) =>{
    if(this.state.containerZoom){
      return classes.containerZoomImage;
    }
    return classes.defaultImage;
  };

  featureMouseState = (classes, title) =>{
    
    if(this.state.featureZoom.state && title==this.state.featureZoom.title){
      return classes.featureZoomImage;
    }
    if(!this.state.featureZoom.state)
      return this.divideFeatures(title, classes);
  };

  priceMouseState = (classes, title) =>{
    if(this.state.priceZoom.state){
      if(title==this.state.priceZoom.title){
        if(title== 'Basic')
          return classes.cardZoomInBasic;
        return classes.cardZoomInPro;
      }
      else{
        if(title== 'Basic')
          return classes.cardZoomOutBasic;
        return classes.cardZoomOutPro;
      }
    }
    return this.getPriceClass(title, classes);
  };

  containerMouseHandler = (event, bool) => {
    this.setState({ containerZoom: bool});
  };

  featureMouseHandler = (event, bool, title) => {
    this.setState({ featureZoom: {title: title, state: bool}});
  };

  priceMouseHandler = (event, bool, title) => {
    this.setState({ priceZoom: {title: title, state: bool}});
  };

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

  getPriceClass = (title, classes) => {
    switch(title){
      case 'Basic':
        return classes.cardBasic;
      case 'Pro':
        return classes.cardPro;
    }
  };

  showPriceDetail(price, classes){
    if(this.state.priceZoom.state && price.title == this.state.priceZoom.title){
      return (
        <div style={{marginBottom: '-30%'}}>
          <div className={classes.cardDetails}>
            <div className={classes.priceTitle}  style={{fontSize: '80px'}}>
                {price.title}
            </div>
            <div className={classes.price}>
                {this.state.priceZoom.state && price.title==this.state.priceZoom.title? price.price: null}
            </div>
          </div>
          <div className={classes.tabletDescription} style={{marginTop: '5%', marginLeft: '3%', width: '620px' }}>
              {price.description}
          </div>
        </div>)
    }
    else{
      return (
        <div className={classes.cardDetails}>
            <div className={classes.priceTitle}>
                {price.title}
            </div>
            <div className={classes.price}>
                {this.state.priceZoom.state && price.title==this.state.priceZoom.title? price.price: null}
            </div>
        </div>);
    }
  };

  divideFeatures = (title, classes) => {
    switch(title){
      case '감정조절':
      case '커스터마이징':
        return classes.featureDivider;
      case '다국어 지원':
        return;
    }
  };

  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>        
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
          <Button color="inherit" className={classes.toolbarTitle}>
              <img src = {logo} className = {classes.mainLogo}/>
              <div className={classes.logoTitle} >
              Tablet
              </div>
            </Button>
            
            <Link to="/">
              <IconButton color="action">
                <HomeIcon  className={classes.mypageIcon} />
              </IconButton>
            </Link>
          </Toolbar>
          <div className={classes.mypageMenu}>
          <List component="nav">
            <ListItem
              button
              selected={this.state.selectedIndex === 0}
              onClick={event => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 1}
              onClick={event => this.handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem
              button
              selected={this.state.selectedIndex === 2}
              onClick={event => this.handleListItemClick(event, 2)}
            >
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem
              button
              selected={this.state.selectedIndex === 3}
              onClick={event => this.handleListItemClick(event, 3)}
            >
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </div>
        
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles) (Mypage);
