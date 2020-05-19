import React, { Component } from "react";
import CodeEditor from "./CodeEditor";
import Output from "./Output";
import { Button, Form, FormGroup, Col } from "react-bootstrap";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      code: `"let x = "m the language of bots"`,
      response: {
        status: 0,
        result: "",
      },
    };
    this.compileHandler = this.compileHandler.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }

  compileHandler(event) {
    event.preventDefault();
    const { code } = this.state;
    console.log(code);
    //need to write api to hit go backend and update the state
  }

  handleCodeChange(newcode) {
    let code  = this.state;
    code = newcode;
    console.log(code);
    return this.setState({ code });
  }
  render() {
    return (
      <div className="container">
        <Form className="form-horizontal">
          <FormGroup>
            <Col sm={12} controlId="code">
              <CodeEditor onChange={this.handleCodeChange} code={this.state.code}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <Button
                bsStyle="primary"
                type="button"
                onClick={this.compileHandler}
              >
                Execute
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
      </div>
    );
  }
}

export default Editor;
