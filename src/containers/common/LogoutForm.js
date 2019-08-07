import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../../actions'
import {Redirect} from 'react-router-dom'
import {
  Button
} from '@blueprintjs/core'

class LogoutForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      submitted: false
    }
  }

  onLogout = () => {
    this.setState({
      submitted: true
    })
    this.props.logout();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {code} = this.props;
    if(code === -1) {
      this.props.logout();
    }
  }

  render() {
    const {loggedIn} = this.props;
    return (
        loggedIn===false?<Redirect to="/login"/>
        :<Button intent="danger" onClick={this.props.logout}>로그아웃</Button>
    )
  }
}

function mapState(state) {
  const {loggedIn} = state.authentication;
  return {loggedIn}
}
const actionCreators = {
  logout: logout
}

export default connect(mapState, actionCreators)(LogoutForm)