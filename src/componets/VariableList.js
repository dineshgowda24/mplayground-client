import React, { Component } from "react";
const data = [{ name: "next_block", type: "int", value: "test_block" }];
class VariableList extends Component {
  render() {
    //Todo validate array elements before reading values
    if (Array.isArray(this.props.data)) {
      return (
        <table>
          <tbody>
            {
              //how to set the key here our variables can be removed
              this.props.data.map((variable, i) => (
                  <tr key={i}>
                    <td>{variable.name}</td>
                    <td>{variable.type}</td>
                    <td>{variable.value}</td>
                  </tr>
              ))
            }
          </tbody>
        </table>
      );
    }
  }
}

export default VariableList;
