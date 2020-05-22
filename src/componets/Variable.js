import React, { Component } from "react";

class Variable extends Component {
  render() {
    const { name, value, type } = this.props;
    let varColor = "test";
    switch (type) {
      case "int":
        varColor = "red";
        break;
      case "string":
        varColor = "green";
        break;
      case "bool":
        varColor = "orange";
        break;
      default:
        return;
    }
    return(
        <div></div>
    );
  }
}

export default Variable;
