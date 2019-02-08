import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LoadingMessage from './containers/LoadingMessage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import MypageProfile from './containers/Mypage/MypageProfile'
import MypagePayment from './containers/Mypage/MypagePayment';
import APIAbout from './containers/API/APIAbout';
import APIOperation from './containers/API/APIOperation';

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
    this.setState({ displayMessage: true });
  }


  render() {
    const { displayMessage } = this.state;

    if (!displayMessage) {
      return <LoadingMessage />;
    }
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/mypage" component={MypageProfile}></Route>
          <Route path="/mypage/profile" component={MypageProfile}></Route>
          <Route path="/mypage/payment" component={MypagePayment}></Route>
          <Route exact path="/api" component={APIAbout}></Route>
          <Route path="/api/about" component={APIAbout}></Route>
          <Route path="/api/operation" component={APIOperation}></Route>
          <Route path="/api/f&q" component={APIOperation}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
