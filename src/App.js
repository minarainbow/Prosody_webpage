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
import Markdown from './Markdown';
import styles from './styles.js'
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import Desktop from './Desktop.jsx';
import Tablet from './Tablet.jsx';
import Phone from './Phone.jsx';
import ReactLoading from 'react-loading';
import LoadingMessage from './LoadingMessage';


class App extends Component {
  constructor(props) {
    super(props);
    this.enableMessage = this.enableMessage.bind(this);

    this.state = {
    displayMessage: false,
    };

    this.timer = setTimeout(this.enableMessage, 2000);
  }

  componentWillUnmount() {
      clearTimeout(this.timer);
  }

  enableMessage() {
      this.setState({displayMessage: true});
  }

  
  render() {
    const {displayMessage} = this.state;

    if(!displayMessage){
      return <div>Loading...</div>;
    }
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

export default withStyles(styles) (App);
