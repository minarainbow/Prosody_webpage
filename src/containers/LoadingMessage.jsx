import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles.js'
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
