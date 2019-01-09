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
import styles from '../styles.js';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';


function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown step';
    }
  }

class MypageProfile extends Component {

  state = {
    containerZoom: false,
    featureZoom: {title: '', state: false},
    priceZoom: {title: '', state: false},
    redirect: false,
    selectedIndex: 0,
    activeStep: 0,
    skipped: new Set(),
  };

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

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
    const steps = getSteps();
    const { activeStep } = this.state;

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
            
            <Link to="/">
              <IconButton color="action">
                <HomeIcon  className={classes.mypageIcon} />
              </IconButton>
            </Link>
          </Toolbar>
          <div classeName = {classes.mypageMain}>
            <div className={classes.mypageMenu}>
                <List component="nav">
                    <Link to="/mypage/profile" style={{textDecoration: 'none', outline: 'none',}}>
                        <ListItem
                        button
                        selected={this.state.selectedIndex === 0}
                        onClick={event => this.handleListItemClick(event, 0)}
                        >
                            <ListItemText primary="프로필" />
                        </ListItem>
                    </Link>
                    <Divider />
                    <ListItem
                    button
                    selected={this.state.selectedIndex === 1}
                    onClick={event => this.handleListItemClick(event, 1)}
                    >
                    {/* <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon> */}
                    <ListItemText primary="메일함" />
                    </ListItem>
                    <Divider />
                    <ListItem
                    button
                    selected={this.state.selectedIndex === 2}
                    onClick={event => this.handleListItemClick(event, 2)}
                    >
                        <ListItemText primary="더미" />
                    </ListItem>
                    <Divider />
                    <ListItem
                    button
                    selected={this.state.selectedIndex === 3}
                    onClick={event => this.handleListItemClick(event, 3)}
                    >
                        <ListItemText primary="더미2" />
                    </ListItem>
                    <Divider />
                </List>
            </div>
            <div className={classes.profileStepper}>
                <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const props = {};
                    const labelProps = {};
                    if (this.isStepOptional(index)) {
                    labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (this.isStepSkipped(index)) {
                    props.completed = false;
                    }
                    return (
                    <Step key={label} {...props}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                    );
                })}
                </Stepper>
                <div>
                {activeStep === steps.length ? (
                    <div>
                    <Typography className={classes.instructions}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={this.handleReset} className={classes.button}>
                        Reset
                    </Button>
                    </div>
                ) : (
                    <div>
                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                    <div>
                        <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                        >
                        Back
                        </Button>
                        {this.isStepOptional(activeStep) && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleSkip}
                            className={classes.button}
                        >
                            Skip
                        </Button>
                        )}
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                        >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                    </div>
                )}
                </div>
            </div>
          </div>
          
        
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles) (MypageProfile);
