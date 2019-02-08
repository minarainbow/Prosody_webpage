import React, { Component } from 'react';
import DesktopBreakpoint from '../../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../../responsive_utilities/tablet_breakpoint';
import MobileBreakpoint from '../../responsive_utilities/mobile_breakpoint';
import { withStyles } from '@material-ui/core/styles';
import APIAboutMobile from './APIAboutMobile';
import APIAboutDesktopTablet from './APIAboutDesktopTablet';

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
  searchBar: {
    marginRight: '2%',
    width: '220px',
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

class APIAbout extends Component {

  render() {
    return (
      <React.Fragment>
        <DesktopBreakpoint>
          <APIAboutDesktopTablet {...this.props}></APIAboutDesktopTablet>
        </DesktopBreakpoint>
        <TabletBreakpoint>
          <APIAboutDesktopTablet {...this.props}></APIAboutDesktopTablet>
        </TabletBreakpoint>
        <MobileBreakpoint>
          <APIAboutMobile {...this.props}></APIAboutMobile>
        </MobileBreakpoint>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(APIAbout);
