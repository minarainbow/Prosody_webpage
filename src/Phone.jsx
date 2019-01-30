import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import logo from './images/logo.png';
import MicBlend from './images/MicBlend.png';
import Emotions from './images/Emotions.png';
import Customizing from './images/Customizing.png';
import MultiLingual from './images/MultiLingual.png';
import styles from './styles.js'
import Responsive from 'react-responsive';
import MediaQuery from 'react-responsive';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import {sections, APIfeatures, prices} from './scripts';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import scrollToComponent from 'react-scroll-to-component';
import grey from '@material-ui/core/colors/grey';
import { Redirect } from 'react-router-dom';

class Phone extends Component {

  state = {
    open: false,
    containerZoom: false,
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='loclahost:3000' />
    }
  };

  containerMouseState = (classes) =>{
    if(this.state.containerZoom){
      return classes.containerZoomImage;
    }
    return classes.defaultImage;
  };

  containerMouseHandler = (event, bool) => {
    this.setState({ containerZoom: bool});
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  scrollToDiv = (title) => {
    this.handleDrawerClose();
    switch(title){
      case 'API 개요':
        scrollToComponent(this.featureContainerPhone);
        break;
      case '다운로드':
        scrollToComponent(this.featureContainerPhone);
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
        return classes.cardBasicPhone;
      case 'Pro':
        return classes.cardProPhone;
    }
  };

  divideFeatures = (title, classes) => {
    switch(title){
      case '감정조절':
      case '커스터마이징':
        return classes.featureDividerPhone;
      case '다국어 지원':
        return;
    }
  }

  render() {
    const {classes} = this.props;
    if(this.state.redirect){
      return <Redirect to='/home'  />
   }
    return (
      <React.Fragment>
        <div>
          <Toolbar className={classes.toolbarMainPhone}>
          {this.renderRedirect()}
          <Button color="inherit" className={classes.toolbarTitlePhone}  onClick={this.setRedirect}>
              <img src = {logo} className = {classes.mainLogoPhone}/>
              <div className={classes.logoTitlePhone} >
              Phone
              </div>
            </Button>
            <IconButton color="action">
              <PersonIcon  className={classes.mypageIcon} />
            </IconButton>
            <IconButton
              aria-label="Open drawer" 
              onClick={this.handleDrawerOpen}>
              <MenuIcon className={classes.mypageIcon}/>
            </IconButton>
          </Toolbar>
        <main>
          <div  style={{display: "block"}}>
            <div className={classes.container}  
                onMouseEnter={(event)=>this.containerMouseHandler(event, true)}
                onMouseLeave={(event) => this.containerMouseHandler(event, false)} >
                  <img src={MicBlend} alt="MicBlend" className={this.containerMouseState(classes)}/>
            </div>
              <Drawer
                classes={{
                  paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                }}
                open={this.state.open} anchor="right" >
                <div>
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronRightIcon />
                  </IconButton>
                </div>
                <Divider />
                {sections.map(section => (
                  <div >
                  <Button color="inherit" style={{fontSize: '18px',  width: '100%', paddingTop: '15%', paddingBottom: '15%'}} key={section}
                    onClick={()=>this.scrollToDiv(section.title)}>
                    <section.icon color="action" style={{position: 'absolute', left: '15px', fontSize: '30px', paddingRight: '10px'}}/>
                    <div style={{position: 'absolute', left: '60px'}}> 
                      {section.title} 
                    </div>
                  </Button>
                  </div>
                ))}
              </Drawer>
            </div>
            <div
              className={classes.keySentencePhone}
              align="center">Humelo TTS는 무엇이 다른가요?<br /></div>
            <div className={classes.featureContainerPhone} ref={(section) => { this.featureContainerPhone = section; }}>
              {APIfeatures.map(feature => (
                <div>
                <img src={feature.image} width="60%"/>
                <div className={classes.phoneTitle}>
                    {feature.title}
                  </div><br />
                  <div className={classes.phoneDescription}>
                    {feature.description1}<br />{feature.description2}<br />{feature.description3}<br />{feature.description4}
                    <div className={this.divideFeatures(feature.title, classes)}></div>
                  </div>
                </div>
                
              ))}
            </div>
            <div
              className={classes.keySentencePhone} style={{marginTop: "250px"}}
              align="center">가격 정책<br />
            </div>
            <Grid container className={classes.priceContainer}  ref={(section) => { this.priceContainer = section; }}>
            {prices.map(price => (
              <Grid item key={price.title} xs={12} md={0}>
                <Card className={this.getPriceClass(price.title, classes)}>
                  <div className={classes.cardDetails} style={{height: '9vw'}}>
                    <CardContent>
                      <div style={{display: 'flex', marginRight: '20px'}}>
                        <div className={classes.priceTitle} style={{fontSize: '40px', borderBottom: '0px'}}>
                          {price.title}
                        </div>
                        <div className={classes.price} style={{fontSize: '25px', marginTop: '8px'}}>
                          {price.price}
                        </div>
                      </div>
                      <div className={classes.phoneDescription} style={{marginTop: '20px'}}>
                        {price.description}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
        </div>
      </React.Fragment>
    );
  }
}

export default Phone;
