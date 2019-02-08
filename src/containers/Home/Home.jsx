import React, { Component } from 'react';
import DesktopBreakpoint from '../../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../../responsive_utilities/tablet_breakpoint';
import MobileBreakpoint from '../../responsive_utilities/phone_breakpoint';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles.js'
import HomeDesktop from './HomeDesktop.jsx';
import HomeTablet from './HomeTablet.jsx';
import HomeMobile from './HomeMobile.jsx';

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
