import React, { Component } from "react";
import CodeEditor from "./CodeEditor";
import Output from "./Output";
import { Form, FormGroup, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import AddVariable from "./AddVariable";
import VariableList from "./VariableList";
class Editor extends Component {
  constructor() {
    super();
    this.state = {
      code: `let x = "M the language of bots"`,
      response: {
        status: 0,
        //result will hold variables which were overridden from the code
        result: [],
        stdout: "",
        stderr: "",
      },
      //defines a list of variables which were added
      variabledefs: [],
    };
    this.handleRunEvent = this.handleRunEvent.bind(this);
    this.handleCodeChangeEvent = this.handleCodeChangeEvent.bind(this);
    this.handleAddVariableEvent = this.handleAddVariableEvent.bind(this);
  }

  handleRunEvent(event) {
    event.preventDefault();
    const { code } = this.state;
    console.log(code);
    //need to write api to hit go backend and update the state
  }

  handleCodeChangeEvent(newcode) {
    let code = this.state;
    code = newcode;
    console.log(code);
    return this.setState({ code });
  }

  handleAddVariableEvent(variable) {
    this.setState({
      variabledefs: [...this.state.variabledefs, variable]
    })
  }

  handleRemoveVariable() {}

  render() {
    return (
      <div>
        <Form className="form-horizontal">
          <FormGroup controlId="code">
            <Col sm={12}>
              <CodeEditor
                onChange={this.handleCodeChangeEvent}
                code={this.state.code}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="code">
            <Col sm={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleRunEvent}
              >
                Run
              </Button>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <Output
                show={this.state.response.status === "0"}
                message={this.state.response.result}
              />
            </Col>
          </FormGroup>
        </Form>
        <Form>
          <AddVariable addVariableHandler={this.handleAddVariableEvent} />
          <VariableList data={this.state.variabledefs} />
        </Form>
      </div>
    );
  }
}

export default Editor;
