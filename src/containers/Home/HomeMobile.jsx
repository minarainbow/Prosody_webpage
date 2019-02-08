import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import logo from '../../images/logo.png';
import MicBlend from '../../images/MicBlend.png';
import { sections, APIfeatures, prices } from '../../scripts';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import scrollToComponent from 'react-scroll-to-component';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LoginDialog from '../../components/LoginDialog';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


class HomeMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerZoom: false,
      featureZoom: { title: '', state: false },
      priceZoom: { title: '', state: false },
      anchorEl: null,
      showModal: false,
      loggedIn: false,
      showAlert: false,
      alertMessage: null,
      open: false,
    };
    this.handler = this.handler.bind(this);
  };

  login = () => {
    this.setState({
      loggedIn: true,
      showModal: false,
    })
  };

  logout = () => {
    let config = {
      headers: { 'Authorization': "Token " + localStorage.getItem('token') }
    };
    axios.post('http://127.0.0.1:8000/ttsapi/logout/',
      null,
      config,
    )
      .then((response) => {
        console.log(response);
        this.setState({
          loggedIn: false,
          showModal: false,
          anchorEl: null,
          showAlert: true,
          alertMessage: "로그아웃되었습니다",
        })
      })
      .catch((error) => {
        console.log(error.response)
        this.setState({
          showModal: false,
          anchorEl: null,
          alertMessage: "문제가 발생했습니다",
        })
      });
  };

  showAlertMessage = () => {
    if (this.state.showAlert)
      return true;
    return false;
  };


  alertMessage = () => {
    if (this.state.showAlert) {
      console.log("show alertmessage")
      return (
        <DialogContentText>{this.state.alertMessage}</DialogContentText>
      )
    }
  };

  handleClose = () => {
    console.log("hhee")
    this.setState({ showAlert: false });
  };

  showProfileMenu = () => {
    if (this.state.loggedIn) {
      return (
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleIconClose}
        >
          <Link to="/mypage" style={{ textDecoration: 'none', outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>마이페이지</MenuItem>
          </Link>
          <MenuItem onClick={this.logout}>로그아웃</MenuItem>
        </Menu>
      )
    }
    else {
      return (
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleIconClose}
        >
          <MenuItem onClick={this.openModal}>로그인 / 회원가입</MenuItem>
        </Menu>
      )
    }
  };

  handler = () => {
    this.setState({
      showModal: false,
    });
  };

  openModal = () => {
    this.setState({
      showModal: true,
      anchorEl: null,
    });
  };

  handleIconClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleIconClose = () => {
    this.setState({ anchorEl: null });
  };

  containerMouseState = (classes) => {
    if (this.state.containerZoom) {
      return classes.containerZoomImage;
    }
    return classes.defaultImage;
  };

  containerMouseHandler = (event, bool) => {
    this.setState({ containerZoom: bool });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  scrollToDiv = (title) => {
    this.handleDrawerClose();
    switch (title) {
      case 'API 개요':
        scrollToComponent(this.featureContainerMobile);
        break;
      case '다운로드':
        scrollToComponent(this.featureContainerMobile);
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
    switch (title) {
      case 'Basic':
        return classes.cardBasicMobile;
      case 'Pro':
        return classes.cardProMobile;
    }
  };

  divideFeatures = (title, classes) => {
    switch (title) {
      case '감정조절':
      case '커스터마이징':
        return classes.featureDividerMobile;
      case '다국어 지원':
        return;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div>
          <Toolbar className={classes.toolbarMainMobile}>
            <Button color="inherit" className={classes.toolbarTitleMobile} >
              <img src={logo} className={classes.mainLogoMobile} />
              <div className={classes.logoTitleMobile} >
                Mobile
              </div>
            </Button>
            <Link to="/api" className={classes.toolbarAPI}>
              <Button>
                <div className={classes.APIButton} >
                  API
                </div>
              </Button>
            </Link>
            <div>
              <IconButton color="action" onClick={this.handleIconClick}>
                <PersonIcon className={classes.defaultIcon} />
              </IconButton>
              {this.showProfileMenu()}
            </div>
            <IconButton
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}>
              <MenuIcon className={classes.defaultIcon} />
            </IconButton>
          </Toolbar>
          <LoginDialog showModal={this.state.showModal} handler={this.handler} login={this.login} />
          <Dialog
            id="simple-popper"
            open={this.showAlertMessage()}
            onClose={this.handleClose}
          >
            <DialogContent>
              {this.alertMessage()}
              <DialogActions>
                <Button onClick={this.handleClose} autoFocus >
                  확인
              </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
          <main>
            <div style={{ display: "block" }}>
              <div className={classes.container}
                onMouseEnter={(event) => this.containerMouseHandler(event, true)}
                onMouseLeave={(event) => this.containerMouseHandler(event, false)} >
                <img src={MicBlend} alt="MicBlend" className={this.containerMouseState(classes)} />
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
                    <Button color="inherit" style={{ fontSize: '18px', width: '100%', paddingTop: '15%', paddingBottom: '15%' }} key={section}
                      onClick={() => this.scrollToDiv(section.title)}>
                      <section.icon color="action" style={{ position: 'absolute', left: '15px', fontSize: '30px', paddingRight: '10px' }} />
                      <div style={{ position: 'absolute', left: '60px' }}>
                        {section.title}
                      </div>
                    </Button>
                  </div>
                ))}
              </Drawer>
            </div>
            <div
              className={classes.keySentenceMobile}
              align="center">Humelo TTS는 무엇이 다른가요?<br /></div>
            <div className={classes.featureContainerMobile} ref={(section) => { this.featureContainerMobile = section; }}>
              {APIfeatures.map(feature => (
                <div>
                  <img src={feature.image} width="60%" />
                  <div className={classes.titleMobile}>
                    {feature.title}
                  </div><br />
                  <div className={classes.descriptionMobile}>
                    {feature.description1}<br />{feature.description2}<br />{feature.description3}<br />{feature.description4}
                    <div className={this.divideFeatures(feature.title, classes)}></div>
                  </div>
                </div>

              ))}
            </div>
            <div
              className={classes.keySentenceMobile} style={{ marginTop: "250px" }}
              align="center">가격 정책<br />
            </div>
            <Grid container className={classes.priceContainer} ref={(section) => { this.priceContainer = section; }}>
              {prices.map(price => (
                <Grid item key={price.title} xs={12} md={0}>
                  <Card className={this.getPriceClass(price.title, classes)}>
                    <div className={classes.cardDetails} style={{ height: '9vw' }}>
                      <CardContent>
                        <div style={{ display: 'flex', marginRight: '20px' }}>
                          <div className={classes.priceTitle} style={{ fontSize: '40px', borderBottom: '0px' }}>
                            {price.title}
                          </div>
                          <div className={classes.price} style={{ fontSize: '25px', marginTop: '8px' }}>
                            {price.price}
                          </div>
                        </div>
                        <div className={classes.descriptionMobile} style={{ marginTop: '20px' }}>
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

export default HomeMobile;
