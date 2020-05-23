import React, { Component } from "react";
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
                    <td><span className="badge badge-dark">{variable.name} <span class="badge badge-light">{variable.value}</span></span></td>
                    <td><span className="badge badge-dark">{variable.type}</span></td>
                    <td><span className="badge badge-dark">{variable.value}</span></td>
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
