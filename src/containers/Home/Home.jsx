import React, { Component } from 'react';
import DesktopBreakpoint from '../../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../../responsive_utilities/tablet_breakpoint';
import MobileBreakpoint from '../../responsive_utilities/mobile_breakpoint';
import { withStyles } from '@material-ui/core/styles';
import HomeDesktop from './HomeDesktop.jsx';
import HomeTablet from './HomeTablet.jsx';
import HomeMobile from './HomeMobile.jsx';

const styles = theme => ({
  logoTitle: {
    fontFamily: 'NanumSquare',
    fontSize: '30px',
  },
  logoTitleMobile: {
    fontFamily: 'NanumSquare',
    fontSize: '24px',
  },
  containerZoomImage: {
    width: "110%",
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3 * theme.transitions.duration.leavingScreen,
    }),
  },
  defaultImage: {
    width: "100%",
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3 * theme.transitions.duration.leavingScreen,
    }),
  },
  featureZoomImage: {
    boxShadow: `0px -8px 10px ${theme.palette.grey[300]}`,
    borderRadius: '10px',
    width: "100%",
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3 * theme.transitions.duration.leavingScreen,
    }),
    cursor: 'pointer',
  },
  cardZoomInBasic: {
    paddingLeft: '3%',
    marginLeft: '20%',
    paddingTop: '20%',
    width: '90%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3 * theme.transitions.duration.leavingScreen,
    }),
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3 * theme.transitions.duration.leavingScreen,
    }),
    cursor: 'pointer',
  },
  cardZoomOutBasic: {
    paddingLeft: '3%',
    marginLeft: '20%',
    paddingTop: '20%',
    width: '50%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3 * theme.transitions.duration.leavingScreen,
    }),
  },
  cardZoomInPro: {
    paddingLeft: '3%',
    paddingTop: '20%',
    marginLeft: '-10%',
    marginRight: '20%',
    width: '90%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    background: 'linear-gradient(to right, #264C56 , #393253)',
    color: 'white',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3 * theme.transitions.duration.leavingScreen,
    }),
    cursor: 'pointer',
  },
  cardZoomOutPro: {
    paddingLeft: '3%',
    marginLeft: '30%',
    marginRight: '20%',
    paddingTop: '20%',
    width: '50%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    background: 'linear-gradient(to right, #264C56 , #393253)',
    color: 'white',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3 * theme.transitions.duration.leavingScreen,
    }),
  },
  cardBasic: {
    paddingLeft: '3%',
    marginLeft: '20%',
    marginRight: '10%',
    paddingTop: '20%',
    width: '70%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3 * theme.transitions.duration.leavingScreen,
    }),
  },
  cardPro: {
    paddingLeft: '3%',
    marginLeft: '10%',
    marginRight: '20%',
    paddingTop: '20%',
    width: '70%',
    height: '120%',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    background: 'linear-gradient(to right, #264C56 , #393253)',
    color: 'white',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: 3 * theme.transitions.duration.leavingScreen,
    }),
  },
  cardBasicMobile: {
    paddingLeft: '3%',
    paddingRight: '3%',
    marginLeft: '30%',
    marginRight: '10%',
    paddingTop: '10%',
    paddingBottom: '10%',
    width: '60%',
    height: '220px',
    border: `3px solid ${theme.palette.grey[200]}`,
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
  },
  cardProMobile: {
    position: 'relative',
    top: '-30%',
    left: '10%',
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingTop: '10%',
    paddingBottom: '5%',
    width: '60%',
    height: '200px',
    border: `3px solid ${theme.palette.grey[200]}`,
    borderRadius: '10px',
    boxShadow: `8px 8px 8px ${theme.palette.grey[200]}`,
    background: 'linear-gradient(to right, #264C56 , #393253)',
    color: 'white',
  },
  cardDetails: {
    display: 'flex',
  },
  priceTitle: {
    fontFamily: 'NanumSquare',
    paddingBottom: '15px',
    borderBottom: '6px double',
    fontStyle: 'italic',
    textShadow: `4px 4px 8px ${theme.palette.grey[600]}`,
    fontSize: '65px',
  },
  price: {
    fontFamily: 'NanumSquare',
    marginLeft: '45%',
    fontStyle: 'italic',
    textShadow: `4px 4px 8px ${theme.palette.grey[600]}`,
    fontSize: '50px',
  },
  priceMobile: {
    fontFamily: 'NanumSquare',
    fontSize: '40px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  descriptionDesktop: {
    fontFamily: 'NanumSquare',
    fontSize: "21px",
    lineHeight: "200%"
  },
  featureDivider: {
    paddingRight: '12%',
    borderRight: `3px solid ${theme.palette.grey[300]}`,
  },
  featureDividerMobile: {
    paddingTop: "2.4vw",
    paddingBottom: "3.2vw",
    marginLeft: "25%",
    marginRight: "50%",
    width: "50%",
    borderBottom: `3px solid ${theme.palette.grey[300]}`,
  },
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
  toolbarMain: {
    width: 'auto',
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
    borderBottom: `3px solid ${theme.palette.grey[300]}`,
    textDecoration: 'none',
    outline: 'none',
  },
  toolbarMainMobile: {
    width: 'auto',
    marginTop: '3%',
    marginLeft: '3%',
    marginRight: '3%',
    borderBottom: `3px solid ${theme.palette.grey[300]}`,
    marginBottom: '3%',
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
  toolbarAPI: {
    marginTop: '0.5%',
    marginLeft: '12%',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: theme.palette.grey[600],
  },
  APIButton: {
    fontFamily: 'NanumSquare',
    fontSize: "20px",
    color: '#708090'
  },
  defaultIcon: {
    fontFamily: 'NanumSquare',
    fontSize: '38px',
    marginLeft: 'auto',
    marginRight: '8px'
  },
  toolbarMenu: {
    width: '35%',
    margin: 'auto',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  container: {
    width: '100%',
    height: '31vw',
    overflow: 'hidden',
  },
  APITitle: {
    fontFamily: 'NanumSquare',
    position: 'absolute',
    top: '18vw',
    left: '12vw',
    color: 'white',
    fontSize: '35px',
  },
  APITitleTablet: {
    fontFamily: 'NanumSquare',
    position: 'absolute',
    top: '20vw',
    left: '14vw',
    color: 'white',
    fontSize: '2.2vw',
  },
  APIDetail: {
    lineHeight: '150%',
    fontFamily: 'NanumSquare',
    position: 'absolute',
    top: '22vw',
    left: '12vw',
    color: 'white',
    fontSize: '22px',
  },  
  APIDetailTablet: {
    fontFamily: 'NanumSquare',
    position: 'absolute',
    top: '24vw',
    left: '14vw',
    color: 'white',
    fontSize: '1.4vw',
    lineHeight: '150%',
  },
  keySentence: {
    fontFamily: 'NanumSquare',
    marginTop: '10%',
    marginBottom: '5%',
    fontSize: '2.1vw',
    fontWeight: 'bold',
  },
  keySentenceMobile: {
    fontFamily: 'NanumSquare',
    marginTop: '6%',
    marginBottom: '6%',
    fontSize: '21px',
    fontWeight: 'bold',
  },
  featureContainer: {
    marginLeft: '7%',
    marginRight: '8%',
    marginBottom: '10%',
    width: '86%',
    display: 'flex',
  },
  featureContainerTablet: {
    marginBottom: '5%',
    width: '100%',
    display: 'flex',
  },
  featureContainerMobile: {
    paddingLeft: '10%',
    paddingRight: '10%',
    width: '80%',
    textAlign: 'center',
  },
  feature: {
    width: '50%',
    textAlign: 'center',
    cursor: 'pointer',
  },
  featureTablet: {
    width: '40%',
    textAlign: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  titleDesktop: {
    fontFamily: 'NanumSquare',
    fontSize: "28px",
    fontWeight: "bold"
  },
  descriptionDesktop: {
    fontFamily: 'NanumSquare',
    fontSize: "21px",
    lineHeight: "200%"
  },
  titleTablet: {
    fontFamily: 'NanumSquare',
    fontSize: "1.8vw",
    fontWeight: "bold",
  },
  descriptionTablet: {
    fontFamily: 'NanumSquare',
    fontSize: "1.5vw",
    lineHeight: "200%"
  },
  titleMobile: {
    fontFamily: 'NanumSquare',
    fontSize: "22px",
    fontWeight: "bold",
  },
  descriptionMobile: {
    lineHeight: '150%',
    fontFamily: 'NanumSquare',
    fontSize: "16px",
  },
  priceContainer: {
    marginBottom: '20%',
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

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <DesktopBreakpoint>
          <HomeDesktop {...this.props}></HomeDesktop>
        </DesktopBreakpoint>
        <TabletBreakpoint>
          <HomeTablet {...this.props}></HomeTablet>
        </TabletBreakpoint>
        <MobileBreakpoint>
          <HomeMobile {...this.props}></HomeMobile>
        </MobileBreakpoint>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
