import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js'
import LoadingMessage from './LoadingMessage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Mypage from './routes/Mypage';
import Home from './routes/Home';
import MypageProfile from './routes/MypageProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.enableMessage = this.enableMessage.bind(this);

    this.state = {
    displayMessage: false,
    };

    this.timer = setTimeout(this.enableMessage, 1500);
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
      return <LoadingMessage/>;
    }
    return (
      <Router>
        <div>
          <Route exact path="/" component = {Home}></Route>
          <Route exact path="/mypage" component = {Mypage}></Route>
          <Route path="/mypage/profile" component = {MypageProfile}></Route>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles) (App);
