import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MypageMenu from '../../components/MypageMenu';


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
  defaultIcon: {
    fontFamily: 'NanumSquare',
    fontSize: '38px',
    marginLeft: 'auto',
    marginRight: '8px'
  },
})

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
            <Link to="/" className={classes.toolbarTitle}>
              <Button >
                <img src={logo} className={classes.mainLogo} />
                <div className={classes.logoTitle} >
                NonMobile
                </div>
              </Button>
            </Link>
            <Link to="/">
              <IconButton color="action">
                <HomeIcon className={classes.defaultIcon} />
              </IconButton>
            </Link>
          </Toolbar>
          <MypageMenu selectedIndex={0} />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MypageProfile);
