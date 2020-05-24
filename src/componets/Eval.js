import React from "react";
import { Alert } from "react-bootstrap";

class Eval extends React.Component {
  render() {
    if (this.props.stderr !== "") {
      return (
        <Alert variant="danger">This is a danger alert—check it out!</Alert>
      );
    } else if (this.props.stdout !== "") {
      return (
        <Alert variant={"success"}>This is a success alert—check it out!</Alert>
      );
    }
    return <div></div>;
  }
}

export default Eval;
