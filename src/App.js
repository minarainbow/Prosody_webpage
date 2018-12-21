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
import styles from './styles.js'


const sections = [
  'API 개요',
  '다운로드',
  '가격정책',
  '지원 및 문의',
];

const prices = [
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

const APIfeatures = [
  {
    title: '감정조절', 
    description1: 'Prosody TTS는 무뚝뚝한 기계음이 아닌,',
    description2: '디테일한 감정까지 목소리에 담아냅니다.',
    description3: '행복한, 화난, 슬픈, 침착한 목소리 등의',
    description4: '다양한 감정을 담아 개성있게 쓸 수 있습니다.',
    image: Emotions,
  },
  {
    title: '커스터마이징', 
    description1: 'Prosody TTS는 같은 문구라도 사람들처럼',
    description2: '다양한 억양과 톤으로 커스터마이징이 가능합니다.',
    description3: '높은 톤, 낮은 톤, 굴곡을 조절하여',
    description4: 'TTS에 개성을 담을 수 있습니다.',
    image: Customizing,
  },
  {
    title: '다국어 지원', 
    description1: 'Prosody TTS는 한 사람의 목소리로',
    description2: '다양한 언어를 말합니다.',
    description3: '하나의 목소리로 세상의 다양한 언어를 말해보세요.',
    description4: '',
    image: MultiLingual,
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
            <IconButton color="action">
              <PersonIcon  className={classes.mypageIcon} />
            </IconButton>
          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarMenu}>
          {sections.map(section => (
            <Button color="inherit" style={{fontSize: '20px'}} key={section}>
              {section}
            </Button>
          ))}
        </Toolbar>
        <main>
            <div className={classes.container} >
              <img src={MicBlend} alt="MicBlend" width="100%"/>
              <Typography className={classes.APITitle} variant="h4">
              맞춤형 목소리 합성 API
              </Typography>
              <Typography className={classes.APIDetail} variant="h6">
              사람의 감정을 담아서 말할 수 있는 자연스러운 TTS API는<br />
              IoT, 게임, 어플리케이션 등의 다양한 분야에서 사용될 수 있습니다<br /><br />
              풍부한 감정을 가지고 말하는 인공지능을 만나보세요
              </Typography>
            </div>
            <Typography
              className={classes.keySentence}
              align="center">Humelo TTS는 무엇이 다른가요?<br /></Typography>
            <div className={classes.featureContainer}>
              {APIfeatures.map(feature => (
                <div className={classes.feature}>
                <img src={feature.image}  />
                  <Typography component="h2" variant="h5">
                    {feature.title}
                  </Typography><br />
                  <Typography paragraph>
                    {feature.description1}<br />{feature.description2}<br />{feature.description3}<br />{feature.description4}<br />
                  </Typography>
                </div>
              ))}
            </div>
            <Typography
              className={classes.keySentence}
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

export default withStyles(styles) (App);
