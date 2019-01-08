import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import logo from './images/logo.png';
import MicBlend from './images/MicBlend.png';
import {sections, APIfeatures, prices} from './scripts';
import scrollToComponent from 'react-scroll-to-component';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LoginDialog from './LoginDialog';


class Desktop extends Component {
  constructor(props){
    super(props);
    this.state={
      containerZoom: false,
      featureZoom: {title: '', state: false},
      priceZoom: {title: '', state: false},
      redirect: false,
      anchorEl: null,
      showModal: false,
    }
  }

  openModal = () =>{
    this.setState({
      showModal: true,
      anchorEl: null,
    });
  }

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

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
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
          <div className={classes.desktopDescription} style={{marginTop: '5%', marginLeft: '3%', width: '620px' }}>
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
    const loggedIn = this.state.loggedIn
      ? <div>
          <p>You are signed in with: {this.state.loggedIn}</p>
        </div>
      : <div>
          <p>You are signed out</p>
      </div>;

    return (
      <React.Fragment>        
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
          <Button color="inherit" className={classes.toolbarTitle}>
              <img src = {logo} className = {classes.mainLogo}/>
              <div className={classes.logoTitle} >
              Desktop
              </div>
            </Button>
            <div>
              <IconButton color="action"  onClick={this.handleClick}>
                <PersonIcon  className={classes.mypageIcon} />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <Link to="/mypage" style={{ textDecoration: 'none', outline: 'none' }}>
                  <MenuItem onClick={this.handleClose}>프로필</MenuItem>
                </Link>
                <Link to="/mypage" style={{ textDecoration: 'none', outline: 'none' }}>
                  <MenuItem onClick={this.handleClose}>로그아웃</MenuItem>
                </Link>
                  <MenuItem onClick={this.openModal}>로그인 / 회원가입</MenuItem>
              </Menu>                
            </div>
            
          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarMenu}>
          {sections.map(section => (
            <Button color="inherit" style={{fontSize: '20px', width: '30%'}} key={section}
              onClick={()=>this.scrollToDiv(section.title)}>
              {section.title}
            </Button>
          ))}
        </Toolbar>
        <LoginDialog showModal={this.state.showModal}/>
        <main>
            <div className={classes.container}  
              onMouseEnter={(event)=>this.containerMouseHandler(event, true)}
              onMouseLeave={(event) => this.containerMouseHandler(event, false)} >
                <img src={MicBlend} alt="MicBlend" className={this.containerMouseState(classes)}/>
            
              <div className={classes.APITitle} >
              맞춤형 목소리 합성 API
              </div>
              <div className={classes.APIDetail} >
              사람의 감정을 담아서 말할 수 있는 자연스러운 TTS API는<br />
              IoT, 게임, 어플리케이션 등의 다양한 분야에서 사용될 수 있습니다<br /><br />
              풍부한 감정을 가지고 말하는 인공지능을 만나보세요
              </div>
            </div>
            <div
              className={classes.keySentence}
              align="center">Humelo TTS는 무엇이 다른가요?<br /></div>
            <div className={classes.featureContainer}  ref={(section) => { this.featureContainer = section; }}>
              {APIfeatures.map(feature => (
                <div className={classes.feature} 
                onMouseEnter={(event)=>this.featureMouseHandler(event, true, feature.title)}
                onMouseLeave={(event) => this.featureMouseHandler(event, false, feature.title)} >
                  <img src={feature.image} width="80%" className={this.divideFeatures(feature.title, classes)}  className={this.featureMouseState(classes, feature.title)} />
                  <div className={classes.desktopTitle}>
                    {feature.title}
                  </div><br />
                  <div className={classes.desktopDescription}>
                    {feature.description1}<br />{feature.description2}<br />{feature.description3}<br />{feature.description4}
                  </div>
                </div>
              ))}
            </div>
            <div
              className={classes.keySentence}
              align="center" >가격 정책<br />
            </div>
            <Grid container  className={classes.priceContainer} ref={(section) => { this.priceContainer = section; }}>
            {prices.map(price => (
              <Grid item key={price.title} xs={12} md={6}
                onMouseEnter={(event)=>this.priceMouseHandler(event, true, price.title)}
                onMouseLeave={(event) => this.priceMouseHandler(event, false, price.title)}>
                <Card  className={this.priceMouseState(classes, price.title)} >
                    {this.showPriceDetail(price, classes)}
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

export default Desktop;
