import React, { Component } from "react";
import { Table } from "react-bootstrap";
class VariableList extends Component {
  render() {
    if (Array.isArray(this.props.data) && this.props.data.length) {
      return (
        <Table striped responsive bordered hover variant="light">
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {/* The key will be a problem once we start removing the list */}
            {this.props.data.map((variable, i) => (
              <tr key={i}>
                <td>
                  <span className="badge badge-dark">{variable.type}</span>
                </td>
                <td>
                  <span className="badge badge-dark">{variable.name}</span>
                </td>
                <td>
                  <span className="badge badge-dark">{variable.value}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }
    return <div></div>
  }
}

export default VariableList;
