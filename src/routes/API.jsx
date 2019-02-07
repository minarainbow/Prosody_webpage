import React, { Component } from 'react';
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles.js'
import APIAboutPhone from './APIAboutPhone';
import APIAbout from './APIAbout';

class API extends Component {

  render() {
    return (
      <React.Fragment>
        <DesktopBreakpoint>
          <APIAbout {...this.props}></APIAbout>
        </DesktopBreakpoint>
        <TabletBreakpoint>
          <APIAbout {...this.props}></APIAbout>
        </TabletBreakpoint>
        <PhoneBreakpoint>
          <APIAboutPhone {...this.props}></APIAboutPhone>
        </PhoneBreakpoint>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(API);
