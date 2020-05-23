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
    console.log(event.target.value);
  };

  addVariableHandler = (event) => {
    event.preventDefault();
    console.log(this.refs.name.value);
    console.log(this.refs.value.value);
    console.log(this.refs.variabletype.value);
    let name = this.refs.name.value;
    let value = this.refs.value.value;
    let type = this.refs.variabletype.value;
    this.refs.name.value = "";
    this.refs.value.value = "";
    this.refs.variabletype.value = "int";
    if (
      name !== "" &&
      value !== "" &&
      (type !== "int" || type !== "string" || type !== "bool")
    ) {
      let variable = {
        name: name,
        value: value,
        type: type,
      };
      this.props.addVariableHandler(variable);
    }
  };

  render() {
    //need to take value from props
    const listItems = variableTypes.map((type) => <option>{type}</option>);
    return (
      <div>
        <Form>
          <select
            id="variable"
            name="variabletype"
            ref="variabletype"
            value={this.state.selectedVariable}
            onChange={this.handleListChange}
          >
            {listItems}
          </select>
          <input name="name" ref="name"></input>
          <input name="value" ref="value"></input>
          <button type="submit" onClick={this.addVariableHandler}>
            Add
          </button>
        </Form>
      </div>
    );
  }
}

export default AddVariable;
