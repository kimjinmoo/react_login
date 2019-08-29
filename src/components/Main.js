import React from 'react'
import LogoutForm from "../containers/common/LogoutForm";
import UserInfo from "../containers/UserInfo"
import {
  Alignment,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core"

class Main extends React.Component {
  render() {
    return (
        <div>
          <Navbar fixedToTop={false}>
            <NavbarGroup align={Alignment.RIGHT}>
              <NavbarHeading>Login Sample</NavbarHeading>
              <NavbarDivider />
              <LogoutForm/>
            </NavbarGroup>
          </Navbar>
          <UserInfo/>
        </div>
    )
  }
}

export default Main