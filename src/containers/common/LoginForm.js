import React from 'react'
import {login} from '../../actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {
  Button,
  FormGroup,
  InputGroup,
  Tooltip,
  Intent
} from "@blueprintjs/core"
import {AppToaster} from "../common/Toast"

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
      showPassword: false,
      disabled: false
    }
  }

  handleChange  = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleLockClick = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  onLogin = (e) => {
    e.preventDefault();

    const {username, password} = this.state;

    if(username && password) {
      this.setState({submitted: true});
      this.props.login(username, password)
    } else {
      AppToaster.show({
        timeout: 1000,
        message: "아이디 또는 비밀번호를 입력하여 주십시요."
      })
    }
  }

  render() {
    const {loggedIn} = this.props;
    const {username, password, showPassword, disabled} = this.state;

    const lockButton = (
        <Tooltip content={`${showPassword ? "일반모드" : "보안보드"}`} disabled={disabled}>
          <Button
              disabled={disabled}
              icon={showPassword ? "unlock" : "lock"}
              intent={Intent.WARNING}
              minimal={true}
              onClick={this.handleLockClick}
          />
        </Tooltip>
    );
    return (
        loggedIn?
            <Redirect to="/"/>
            :
            <div className="innerLogin">
              <FormGroup
                  label="아이디"
              >
                <InputGroup type="text" name="username" value={username}
                            onChange={this.handleChange}
                            placeholder="ID를 입력하세요"/>
              </FormGroup>
              <FormGroup
                  label="비밀번호"
              >
                <InputGroup
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    rightElement={lockButton}
                    placeholder="비밀번호를 입력하세요"/>
                <div id="login_button" style={
                  {
                    textAlign: "center"
                  }
                }>
                  <Button type="button" intent="primary"
                          onClick={this.onLogin}>로그인하기</Button>

                </div>
              </FormGroup>
            </div>
    )
  }
}

function mapState(state) {
  const {loggedIn} = state.authentication
  return {loggedIn}
}

const mapDispatchToProps = {
  login: login
}

export default connect(mapState, mapDispatchToProps)(LoginForm)