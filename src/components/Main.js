import React from 'react'
import LogoutForm from "../containers/common/LogoutForm";
import {
  Alignment,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core"

class Main extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
        <div>
          <Navbar fixedToTop={false}>
            <NavbarGroup align={Alignment.RIGHT}>
              <NavbarHeading>Hello World</NavbarHeading>
              <NavbarDivider />
              <LogoutForm/>
            </NavbarGroup>
          </Navbar>
          <div>
            Container
          </div>
        </div>
    )
  }
}

export default Main