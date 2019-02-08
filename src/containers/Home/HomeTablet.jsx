import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.png';
import MicBlend from '../../images/MicBlend.png';
import { sections, APIfeatures, prices } from '../../scripts';
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

class HomeTablet extends Component {
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
    // axios.defaults.headers.common = { 'Authorization': `Token ${localStorage.getItem('token')}` }
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

  featureMouseState = (classes, title) => {
    if (this.state.featureZoom.state && title == this.state.featureZoom.title) {
      return classes.featureZoomImage;
    }
    if (!this.state.featureZoom.state)
      return this.divideFeatures(title, classes);
  };

  priceMouseState = (classes, title) => {
    if (this.state.priceZoom.state) {
      if (title == this.state.priceZoom.title) {
        if (title == 'Basic')
          return classes.cardZoomInBasic;
        return classes.cardZoomInPro;
      }
      else {
        if (title == 'Basic')
          return classes.cardZoomOutBasic;
        return classes.cardZoomOutPro;
      }
    }
    return this.getPriceClass(title, classes);
  };

  containerMouseHandler = (event, bool) => {
    this.setState({ containerZoom: bool });
  };

  featureMouseHandler = (event, bool, title) => {
    this.setState({ featureZoom: { title: title, state: bool } });
  };

  priceMouseHandler = (event, bool, title) => {
    this.setState({ priceZoom: { title: title, state: bool } });
  };

  scrollToDiv = (title) => {
    switch (title) {
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
    switch (title) {
      case 'Basic':
        return classes.cardBasic;
      case 'Pro':
        return classes.cardPro;
    }
  };

  showPriceDetail(price, classes) {
    if (this.state.priceZoom.state && price.title == this.state.priceZoom.title) {
      return (
        <div >
          <div className={classes.cardDetails}>
            <div className={classes.priceTitle} style={{ fontSize: '70px', marginRight: '-20%' }}>
              {price.title}
            </div>
            <div className={classes.price} style={{ fontSize: '40px' }}>
              {this.state.priceZoom.state && price.title == this.state.priceZoom.title ? price.price : null}
            </div>
          </div>
          <div className={classes.descriptionTablet} style={{ marginTop: '5%', marginLeft: '3%', width: '40vw' }}>
            {price.description}
          </div>
        </div>)
    }
    else {
      return (
        <div className={classes.cardDetails}>
          <div className={classes.priceTitle} style={{ fontSize: '50px' }}>
            {price.title}
          </div>
          <div className={classes.price}>
            {this.state.priceZoom.state && price.title == this.state.priceZoom.title ? price.price : null}
          </div>
        </div>);
    }
  };

  divideFeatures = (title, classes) => {
    switch (title) {
      case '감정조절':
      case '커스터마이징':
        return classes.featureDivider;
      case '다국어 지원':
        return;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div >
          <Toolbar className={classes.toolbarMain}>
            <Link to="/" className={classes.toolbarTitle}>
              <Button >
                <img src={logo} className={classes.mainLogo} />
                <div className={classes.logoTitle} >
                  Tablet
                </div>
              </Button>
            </Link>
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
          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarMenu} style={{ width: '40%' }}>
            {sections.map(section => (
              <Button color="inherit"
                style={{ fontSize: '18px' }} key={section}
                onClick={() => this.scrollToDiv(section.title)}>
                {section.title}
              </Button>
            ))}
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
            <div className={classes.container}
              onMouseEnter={(event) => this.containerMouseHandler(event, true)}
              onMouseLeave={(event) => this.containerMouseHandler(event, false)}>
              <img src={MicBlend} alt="MicBlend" width="100%" className={this.containerMouseState(classes)} />
              <div className={classes.APITitleTablet} >
                맞춤형 목소리 합성 API
              </div>
              <div className={classes.APIDetailTablet} >
                사람의 감정을 담아서 말할 수 있는 자연스러운 TTS API는<br />
                IoT, 게임, 어플리케이션 등의 다양한 분야에서 사용될 수 있습니다<br /><br />
                풍부한 감정을 가지고 말하는 인공지능을 만나보세요
              </div>
            </div>
            <div
              className={classes.keySentence}
              align="center">Humelo TTS는 무엇이 다른가요?<br /></div>
            <div className={classes.featureContainerTablet} ref={(section) => { this.featureContainer = section; }}>
              {APIfeatures.map(feature => (
                <div className={classes.featureTablet}
                  onMouseEnter={(event) => this.featureMouseHandler(event, true, feature.title)}
                  onMouseLeave={(event) => this.featureMouseHandler(event, false, feature.title)}>
                  <img src={feature.image} width="80%" className={this.divideFeatures(feature.title, classes)} className={this.featureMouseState(classes, feature.title)} />
                  <div className={classes.titleTablet}>
                    {feature.title}
                  </div><br />
                  <div className={classes.descriptionTablet}>
                    {feature.description1}<br />{feature.description2}<br />{feature.description3}<br />{feature.description4}<br />
                  </div>
                </div>
              ))}
            </div>
            <div
              className={classes.keySentence}
              align="center">가격 정책<br />
            </div>
            <Grid container className={classes.priceContainer} ref={(section) => { this.priceContainer = section; }}>
              {prices.map(price => (
                <Grid item key={price.title} xs={12} md={6}
                  onMouseEnter={(event) => this.priceMouseHandler(event, true, price.title)}
                  onMouseLeave={(event) => this.priceMouseHandler(event, false, price.title)}>
                  <Card className={this.priceMouseState(classes, price.title)} style={{ height: '240px' }} >
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

export default HomeTablet;
