import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactLoading from 'react-loading';

const styles = theme => ({
    loadingPage: {
        fontFamily: 'NanumSquare',
        color: 'white',
        fontSize: "30px",
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(to right, #58C2DF  , #393253)',
      },
      loadingAnimation: {
        position: 'relative',
        top: '25%',
        left: '47%',
      },
      loadingTitle: {
        paddingTop: '100px',
        textAlign: 'center',
        color: "white",
      },
  })


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
