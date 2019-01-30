import React, { Component } from 'react';
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
import Desktop from '../Desktop.jsx';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles.js'
import Tablet from '../Tablet.jsx';
import Phone from '../Phone.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <DesktopBreakpoint>
          <Desktop {...this.props}></Desktop>
        </DesktopBreakpoint>
        <TabletBreakpoint>
          <Tablet {...this.props}></Tablet>
        </TabletBreakpoint>
        <PhoneBreakpoint>
          <Phone {...this.props}></Phone>
        </PhoneBreakpoint>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
