import React from 'react';
import ReactModalLogin from 'react-modal-login';

// import {facebookConfig, googleConfig} from "../social-config";

export default class LoginDialog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      loggedIn: null,
      loading: false,
      error: null,
      initialTab: null,
      recoverPasswordSuccess: null,
    };

  }


  onLogin() {
    console.log('__onLogin__');
    console.log('email: ' + document.querySelector('#email').value);
    console.log('password: ' + document.querySelector('#password').value);

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (!email || !password) {
      this.setState({
        error: true
      })
    } else {
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

    if (!login || !email || !password) {
      this.setState({
        error: true
      })
    } else {
      this.onLoginSuccess('form');
    }
  }

  onRecoverPassword() {
    console.log('__onFotgottenPassword__');
    console.log('email: ' + document.querySelector('#email').value);

    const email = document.querySelector('#email').value;


    if (!email) {
      this.setState({
        error: true,
        recoverPasswordSuccess: false
      })
    } else {
      this.setState({
        error: null,
        recoverPasswordSuccess: true
      });
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

    this.setState({
      loading: false,
      error: response
    })
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
      error: null,
      recoverPasswordSuccess: false,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null,
    });
  }

  render() {

    const loggedIn = this.state.loggedIn
      ? <div>
          <p>You are signed in with: {this.state.loggedIn}</p>
        </div>
      : <div>
          <p>You are signed out</p>
      </div>;

    const isLoading = this.state.loading;

    return (
        <ReactModalLogin
          visible={this.props.showModal}
          onCloseModal={this.closeModal.bind(this)}
          onCloseModal={this.props.handler}
          loading={isLoading}
          initialTab={this.state.initialTab}
        //   error={this.state.error}
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
        //   providers={{
        //     facebook: {
        //       config: facebookConfig,
        //       onLoginSuccess: this.onLoginSuccess.bind(this),
        //       onLoginFail: this.onLoginFail.bind(this),
        //       inactive: isLoading,
        //       label: "Continue with Facebook"
        //     },
        //     google: {
        //       config: googleConfig,
        //       onLoginSuccess: this.onLoginSuccess.bind(this),
        //       onLoginFail: this.onLoginFail.bind(this),
        //       inactive: isLoading,
        //       label: "Continue with Google"
        //     }
        //   }}
        />
    )
  }
}
