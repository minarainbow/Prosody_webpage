import React from 'react';
import ReactModalLogin from 'react-modal-login';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default class LoginDialog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      loggedIn: null,
      loading: false,
      nicknameError: null,
      emailError: null,
      passwordError: null,
      authError: null,
      initialTab: null,
      recoverPasswordSuccess: null,
    };

  }

  showErrorMessage = () => {
    if (this.state.nicknameError || this.state.emailError || this.state.passwordError || this.state.authError)
      return true;
    return false;
  };


  errorMessage = () => {
    if (this.state.nicknameError) {
      return (
        <DialogContentText>닉네임을 입력해주세요</DialogContentText>
      )
    }
    else if (this.state.emailError) {
      return (
        <DialogContentText>이메일을 입력해주세요</DialogContentText>
      )
    }
    else if (this.state.passwordError) {
      return (
        <DialogContentText>비밀번호를 입력해주세요</DialogContentText>
      )
    }
    else if (this.state.authError) {
      return (
        <DialogContentText>입력하신 정보가 정확하지 않습니다</DialogContentText>
      )
    }
  };

  handleClose = () => {
    this.setState({ nicknameError: false, emailError: false, passwordError: false, authError: false });
  };

  onLogin() {
    console.log('__onLogin__');
    console.log('email: ' + document.querySelector('#email').value);
    console.log('password: ' + document.querySelector('#password').value);

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (!email) {
      this.setState({
        emailError: true,
      })
    }
    else if (!password) {
      this.setState({
        passwordError: true,
      })
    }
    else {
      this.onLoginSuccess('form');
    }
  }

  onRegister() {
    console.log('__onRegister__');
    console.log('login: ' + document.querySelector('#login').value);
    console.log('email: ' + document.querySelector('#email').value);
    console.log('password: ' + document.querySelector('#password').value);

    const login = document.querySelector('#login').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    if (!login) {
      this.setState({
        nicknameError: true,
      })
    }
    else if (!email) {
      this.setState({
        emailError: true,
      })
    }
    else if (!password) {
      this.setState({
        passwordError: true,
      })
    }
    else {
      this.onLoginSuccess('form');
    }
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

  onLoginSuccess(method, response) {

    this.closeModal();
    this.setState({
      loggedIn: method,
      loading: false,
    })
  }

  onLoginFail(method, response) {
    if (response) {
      this.setState({
        loading: false,
        authError: true,
      })
    }
    else {
      this.setState({
        loading: false,
      })
      this.handleClose();
    }
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
      <div>
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
              }
            ],
            registerInputs: [
              {
                containerClass: 'RML-form-group',
                label: '닉네임',
                type: 'text',
                inputClass: 'RML-form-control',
                id: 'login',
                name: 'login',
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
          open={this.showErrorMessage()}
          onClose={this.handleClose}
        >
          <DialogContent>
            {this.errorMessage()}
            <DialogActions>
              <Button onClick={this.handleClose} autoFocus>
                확인
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}
