import { Form, Row, Col, Button } from "react-bootstrap";
import React, { Component } from "react";

//need to take this list dynamically
const variableTypes = ["int", "bool", "string"];
class AddVariable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vartype: "int",
    };
    this.handleListChange = this.handleListChange.bind(this);
  }

  handleListChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
    console.log(event.target.name);
  };

  addVariableHandler = (event) => {
    event.preventDefault();
    let { name, vartype, value } = this.state;
    console.log(name);
    console.log(vartype);
    console.log(value);
    if (
      name !== "" &&
      value !== "" &&
      (vartype !== "int" || vartype !== "string" || vartype !== "bool")
    ) {
      let variable = { name: name, type: vartype, value: value };
      console.log(variable);
      this.props.addVariableHandler(variable);
    }
  };

  render() {
    //need to take value from props
    const listItems = variableTypes.map((type) => <option>{type}</option>);
    return (
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Control
                  as="select"
                  custom
                  onChange={this.handleListChange}
                  inline
                  name="vartype"
                >
                  {listItems}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Control
                inline
                placeholder="name"
                ref="name"
                name="name"
                required="required"
                onChange={this.handleListChange}
              />
            </Col>
            <Col>
              <Form.Control
                inline
                placeholder="value"
                ref="value"
                name="value"
                required="required"
                onChange={this.handleListChange}
              />
            </Col>
            <Col>
              <Button variant="outline-info" onClick={this.addVariableHandler}>
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default AddVariable;
