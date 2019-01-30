import React, { Component } from 'react';
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
import styles from './styles.js'
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from './responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import Desktop from './Desktop.jsx';
import Tablet from './Tablet.jsx';
import Phone from './Phone.jsx';
import ReactLoading from 'react-loading';


class LoadingMessage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.loadingPage}>
                    <ReactLoading className={classes.loadingAnimation}
                        type={'cylon'} height={100} width={100} />
                    <div className={classes.loadingTitle}>
                        Welcome to Prosody TTS
                </div>
                </div>
            </React.Fragment>

        );
    }
}

export default withStyles(styles)(LoadingMessage);
