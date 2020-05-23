import React, { Component } from "react";
import { Navbar, Button} from "react-bootstrap";
class Branding extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand>The M Playground</Navbar.Brand>
        <Button variant="outline-info" onClick={this.props.handleClickEvent}>M It!</Button>
      </Navbar>
    );
  }
}

export default Branding;
