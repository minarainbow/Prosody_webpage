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

class Tablet extends Component {

  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <img src={logo} className="logo" alt="logo" height="50" width="50" />
            <Typography
              component="h2"
              variant="h4"
              color="inherit"
              align="left"
              noWrap
              className={classes.toolbarTitle}>
              Tablet
            </Typography>
            <IconButton color="action">
              <PersonIcon  className={classes.defaultIcon} />
            </IconButton>
          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarMenu} style={{width: '40%'}}>
          {sections.map(section => (
            <Button color="inherit" 
              style={{fontSize: '18px'}} key={section}>
              {section.title}
            </Button>
          ))}
        </Toolbar>
        <main>
            <div className={classes.container} >
              <img src={MicBlend} alt="MicBlend" width="100%"/>
              <div className={classes.APITitleTablet} >
              맞춤형 목소리 합성 API
              </div>
              <div className={classes.APIDetailTablet} >
              사람의 감정을 담아서 말할 수 있는 자연스러운 TTS API는<br />
              IoT, 게임, 어플리케이션 등의 다양한 분야에서 사용될 수 있습니다<br /><br />
              풍부한 감정을 가지고 말하는 인공지능을 만나보세요
              </div>
            </div>
            <div
              className={classes.keySentence}
              align="center">Humelo TTS는 무엇이 다른가요?<br /></div>
            <div className={classes.featureContainerTablet}>
              {APIfeatures.map(feature => (
                <div className={classes.featureTablet}>
                <img src={feature.image} width="80%"/>
                <div style={{fontSize: "1.8vw", fontWeight: "bold"}}>
                    {feature.title}
                  </div><br />
                  <div style={{fontSize: "1.5vw", lineHeight: "200%"}}>
                    {feature.description1}<br />{feature.description2}<br />{feature.description3}<br />{feature.description4}<br />
                  </div>
                </div>
              ))}
            </div>
            <Typography
              className={classes.keySentence}
              align="center">가격 정책<br />
            </Typography>
            <Grid container  className={classes.cardGrid}>
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

export default Tablet;
