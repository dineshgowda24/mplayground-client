import React, { Component } from "react";
import { FaRobot } from "react-icons/fa";
import { TiMediaPlay } from "react-icons/ti";
import { Navbar, Button } from "react-bootstrap";
class Branding extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand>
          {" "}
          <FaRobot /> The M Playground
        </Navbar.Brand>
        <Button variant="outline-info" onClick={this.props.handleClickEvent}>
          <TiMediaPlay /> M It!
        </Button>
      </Navbar>
    );
  }
}

export default Branding;
