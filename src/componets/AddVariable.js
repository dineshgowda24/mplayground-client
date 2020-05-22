import { Form } from "react-bootstrap";
import React, { Component } from "react";

//need to take this list dynamically
const variableTypes = ["int", "bool", "string"];
class AddVariable extends Component {
  constructor() {
    super();
    this.state = {
      selectedVariable: "int",
    };
    this.handleListChange = this.handleListChange.bind(this);
  }

  handleListChange = (event) => {
    this.setState({
      selectedVariable: event.target.value,
    });
    console.log(event.target.value)
  }

  render() {
    //need to take value from props
    const listItems = variableTypes.map((type) => <option>{type}</option>);
    return (
      <div>
        <Form>
          <select
            id="variable"
            value={this.state.selectedVariable}
            onChange={this.handleListChange}
          >
            {listItems}
          </select>
          <input name="name"></input>
          <input name="value"></input>
          <button type="submit" onSubmit={this.props.handleVariableSubmit}>
            Add
          </button>
        </Form>
      </div>
    );
  }
}

export default AddVariable;
