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
import logo from './logo.png';
import MicBlend from './MicBlend.png';
import Emotions from './Emotions.png';
import Customizing from './Customizing.png';
import MultiLingual from './MultiLingual.png';



const styles = theme => ({
  
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    marginLeft: theme.spacing.unit,
    flex: 1,
    color: theme.palette.grey[600],
  },
  toolbarMenu: {
    width: 400,
    margin: 'auto',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing.unit,
  },
  mypageIcon: {
    height:50,
    width:50,
  },
  container: {
    position: 'relative',
    marginBottom: 50
  },
  container2: {
    textAlign: 'center',
  },
  summaryAPI: {
    // fontFamily: '굴림',
    position: 'absolute',
    top: 70,
    left: 200,
    color: 'white',
  },
  detailAPI: {
    // fontFamily: '굴림',
    position: 'absolute',
    top: 140,
    left: 200,
    color: 'white',
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const sections = [
  'API 개요',
  '다운로드',
  '가격정책',
  '지원 및 문의',
];

const featuredPosts = [
  {
    title: 'Basic',
    price: '99.99 won',
    description: '여기에 설명이 들어갑니다 어쩌구 저쩌구',
  },
  {
    title: 'Pro',
    price: '3,599,998 won',
    description: '여기에 설명이 들어갑니다 어쩌구 저쩌구',
  }

]

class App extends Component {
  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <img src={logo} className="logo" alt="logo" height="50" width="50" />
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              className={classes.toolbarTitle}>
              Prosody TTS
            </Typography>
            <IconButton className={classes.mypageIcon} color="action">
              <PersonIcon  style={{fontSize: '30px'}}/>
            </IconButton>
          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarMenu}>
          {sections.map(section => (
            <Button color="inherit" noWrap key={section}>
              {section}
            </Button>
          ))}
        </Toolbar>
        <main>
            <div className={classes.container}  width="auto">
              <img src={MicBlend} alt="MicBlend" width="100%"/>
              <Typography className={classes.summaryAPI} variant="h4">
              맞춤형 목소리 합성 API
              </Typography>
              <Typography className={classes.detailAPI} variant="h6">
              사람의 감정을 담아서 말할 수 있는 자연스러운 TTS API는<br />
              IoT, 게임, 어플리케이션 등의 다양한 분야에서 사용될 수 있습니다<br /><br />
              풍부한 감정을 가지고 말하는 인공지능을 만나보세요
              </Typography>
            </div>
            <div className={classes.container2}  width="auto">
              Humelo TTS는 무엇이 다른가요?<br />
              <img src={Emotions} alt="Emotions" width="30%"/>
              <img src={Customizing} alt="Customizing" width="30%"/>
              <img src={MultiLingual} alt="Multilingual" width="30%"/>
            </div>
        </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles) (App);
