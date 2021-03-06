import React from 'react';
import ReactModalLogin from 'react-modal-login';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class LoginDialog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      loggedIn: null,
      loading: false,
      initialTab: null,
      recoverPasswordSuccess: null,
      showAlert: false,
      alertMessage: null,
    };

  }

  showAlertMessage = () => {
    if (this.state.showAlert)
      return true;
    return false;
  };


  alertMessage = () => {
    if(this.state.showAlert) {
      return (
        <DialogContentText>{this.state.alertMessage}</DialogContentText>
      )
    }
  };

  handleClose = () => {
    this.setState({ showAlert: false });
  };

  onLogin() {
    console.log('__onLogin__');
    console.log('username: ' + document.querySelector('#username').value);
    console.log('password: ' + document.querySelector('#password').value);

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    console.log("here login request");
    axios.post('http://127.0.0.1:8000/ttsapi/login/', {
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response);
        this.props.login();
        this.setState({
          showAlert: true,
          alertMessage: "로그인이 완료되었습니다",
          loggedIn: true,
        })
        localStorage.setItem('token', response.data.token)
        console.log('token saved is' + localStorage.getItem('token'))
      })
      .catch( (error) => {
        console.log(error.response)
        for (var key in error.response.data){
          this.setState({
            showAlert: true,
            alertMessage: error.response.data[key]
          })
        }
      });    
  }

  onRegister() {
    console.log('__onRegister__');
    console.log('username: ' + document.querySelector('#username').value);
    console.log('email: ' + document.querySelector('#email').value);
    console.log('password: ' + document.querySelector('#password').value);    
    console.log('confirm_password: ' + document.querySelector('#confirm_password').value);

    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirm_password = document.querySelector('#confirm_password').value;
    
    console.log("here axios post");
    axios.post('http://127.0.0.1:8000/ttsapi/users/', {
      username: username,
      confirm_password: password,
      email: email,
      password: password,
      confirm_password: confirm_password,
    })
      .then((response) => {
        console.log(response);
        this.setState({
          showAlert: true,
          alertMessage: '회원가입이 완료되었습니다'
        })
      })
      .catch( (error) => {
        console.log(error.response)
        for (var key in error.response.data){
          this.setState({
            showAlert: true,
            alertMessage: error.response.data[key]
          })
        }
      });    
  }

  onRecoverPassword() {
    console.log('__onFotgottenPassword__');
    console.log('email: ' + document.querySelector('#email').value);

    const email = document.querySelector('#email').value;


    if (!email) {
      this.setState({
        emailError: true,
        recoverPasswordSuccess: false
      })
    } else {
      this.setState({
        recoverPasswordSuccess: true
      });
      this.handleClose();
    }
  }

  openModal(initialTab) {
    this.setState({
      initialTab: initialTab
    }, () => {
      this.setState({
        showModal: true,
      })
    });
  }

  startLoading() {
    this.setState({
      loading: true
    })
  }

  finishLoading() {
    this.setState({
      loading: false
    })
  }

  afterTabsChange() {
    this.setState({
      recoverPasswordSuccess: false,
    });
    this.handleClose();
  }

  closeModal() {
    this.setState({
      showModal: false,
    });
    this.handleClose();
  }

  render() {

    const { displayMessage } = this.state;

    const loggedIn = this.state.loggedIn
      ? <div>
        <p>You are signed in with: {this.state.loggedIn}</p>
      </div>
      : <div>
        <p>You are signed out</p>
      </div>;

    const isLoading = this.state.loading;

    return (
      <div >
        <ReactModalLogin
          visible={this.props.showModal}
          onCloseModal={this.closeModal.bind(this)}
          onCloseModal={this.props.handler}
          loading={isLoading}
          initialTab={this.state.initialTab}

          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          form={{
            onLogin: this.onLogin.bind(this),
            onRegister: this.onRegister.bind(this),
            onRecoverPassword: this.onRecoverPassword.bind(this),

            recoverPasswordSuccessLabel: this.state.recoverPasswordSuccess
              ? {
                label: "새 비밀번호가 메일로 전송되었습니다"
              }
              : null,
            recoverPasswordAnchor: {
              label: "비밀번호가 기억나지 않으십니까?"
            },
            loginBtn: {
              label: "로그인"
            },
            registerBtn: {
              label: "회원가입"
            },
            recoverPasswordBtn: {
              label: "비밀번호 재설정"
            },
            loginInputs: [
              {
                containerClass: 'RML-form-group',
                label: '닉네임',
                type: 'username',
                inputClass: 'RML-form-control',
                id: 'username',
                name: 'username',
                placeholder: '닉네임',
              },
              {
                containerClass: 'RML-form-group',
                label: '비밀번호',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: '비밀번호',
              }
            ],
            registerInputs: [
              {
                containerClass: 'RML-form-group',
                label: '닉네임',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'username',
                name: 'username',
                placeholder: '닉네임',
              },
              {
                containerClass: 'RML-form-group',
                label: '이메일',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: '이메일',
              },
              {
                containerClass: 'RML-form-group',
                label: '비밀번호',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'password',
                name: 'password',
                placeholder: '비밀번호',
              },
              {
                containerClass: 'RML-form-group',
                label: '비밀번호 확인',
                type: 'password',
                inputClass: 'RML-form-control',
                id: 'confirm_password',
                name: 'confirm_password',
                placeholder: '비밀번호 확인',
              }
            ],
            recoverPasswordInputs: [
              {
                containerClass: 'RML-form-group',
                label: '이메일',
                type: 'email',
                inputClass: 'RML-form-control',
                id: 'email',
                name: 'email',
                placeholder: '이메일',
              },
            ],
          }}
        />
        <Dialog
          id="simple-popper"
          open={this.showAlertMessage()}
          onClose={this.handleClose}
        >
          <DialogContent>
            {this.alertMessage()}
            <DialogActions>
              <Button onClick={this.handleClose} autoFocus >
                확인
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}
