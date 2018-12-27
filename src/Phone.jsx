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
import logo from './images/logo.png';
import MicBlend from './images/MicBlend.png';
import Emotions from './images/Emotions.png';
import Customizing from './images/Customizing.png';
import MultiLingual from './images/MultiLingual.png';
import styles from './styles.js'
import Responsive from 'react-responsive';
import MediaQuery from 'react-responsive';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import {sections, APIfeatures, prices} from './scripts';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';

class Phone extends Component {

  state = {
    open: false,
  };

  
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMainPhone}>
            <img src={logo} className="logo" alt="logo" height="40" width="40" />
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              className={classes.toolbarTitle}>
              Phone
            </Typography>
            <IconButton color="action">
              <PersonIcon  className={classes.defaultIcon} />
            </IconButton>
            <IconButton
              aria-label="Open drawer" 
              onClick={this.handleDrawerOpen}>
              <MenuIcon className={classes.defaultIcon}/>
            </IconButton>
          </Toolbar>
        <main>
          <div  style={{display: "block"}}>
              <img src={MicBlend} alt="MicBlend" width="100%"/>
              <Drawer 
                classes={{
                  paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                }}
                open={this.state.open} anchor="right">
                <div className={classes.toolbarIcon}>
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronRightIcon />
                  </IconButton>
                </div>
                <Divider />
                {sections.map(section => (
                  <div style={{display: "inline-block"}}>
                  <Button color="inherit" style={{fontSize: '18px', width: '100%'}} key={section}>
                    <section.icon color="action" className={classes.defaultIcon}/>
                    <div > {section.title} </div>
                  </Button>
                  </div>
                ))}
              </Drawer>
            </div>
            <div
              className={classes.keySentencePhone}
              align="center">Humelo TTS는 무엇이 다른가요?<br /></div>
            <div className={classes.featureContainerPhone}>
              {APIfeatures.map(feature => (
                <div>
                <img src={feature.image} width="60%"/>
                <div style={{fontSize: "22px", fontWeight: "bold"}}>
                    {feature.title}
                  </div><br />
                  <div style={{fontSize: "16px"}}>
                    {feature.description1}<br />{feature.description2}<br />{feature.description3}<br />{feature.description4}<br /><br /><br />
                  </div>
                </div>
              ))}
            </div>
            <Typography
              className={classes.keySentencePhone}
              align="center">가격 정책<br />
            </Typography>
            <Grid container spacing={40} className={classes.cardGrid}>
            {prices.map(price => (
              <Grid item key={price.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {price.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {price.price}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {price.description}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
        </div>
      </React.Fragment>
    );
  }
}

export default Phone;
