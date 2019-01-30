import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import logo from '../images/logo.png';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles.js';
import MypageMenu from './MypageMenu';

class MypageProfile extends Component {

  state = {
    selectedIndex: 0,
    activeStep: 0,
    skipped: new Set(),
  };

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <Link to="/" className={classes.toolbarTitleTablet}>
              <Button >
                <img src={logo} className={classes.mainLogo} />
                <div className={classes.logoTitle} >
                  Tablet
                </div>
              </Button>
            </Link>
            <Link to="/">
              <IconButton color="action">
                <HomeIcon className={classes.mypageIcon} />
              </IconButton>
            </Link>
          </Toolbar>
          <MypageMenu />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MypageProfile);
