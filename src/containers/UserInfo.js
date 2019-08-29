import React from 'react'
import {connect} from "react-redux";

class UserInfo extends React.Component {

  render() {
    let {oauth} = this.props;
    return (
        <div>
          Login User : + {oauth.id}
        </div>
    )
  }

}


function mapState(state) {
  const {oauth} = state.authentication
  return {oauth}
}


export default connect(mapState)(UserInfo)