import React, { Component } from "react";
const data = [
  ["int", "age", 24],
  ["string", "next_block", "test_block"],
];
class VariableList extends Component {
  render() {
      //Todo validate array elements before reading values
    if (this.props.data != undefined) {
      return (
        <table>
          <tbody>
            {
              //how to set the key here our variables can be removed
              this.props.data.map((numList, i) => (
                <tr key={i}>
                  {numList.map((num, j) => (
                    <td key={j}>{num}</td>
                  ))}
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
