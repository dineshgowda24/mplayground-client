import React, { Component } from "react";
import CodeEditor from "./CodeEditor";
import Output from "./Output";
import { Form, FormGroup, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';



class Editor extends Component {
  constructor() {
    super();
    this.state = {
      code: `let x = "M the language of bots"`,
      response: {
        status: 0,
        result: "",
        //need to check on type handline
        variabledefs: {
          next_block: "",
          current_time: "",
          current_year: "",
          name: "",
          email: "",
        },
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
    let code = this.state;
    code = newcode;
    console.log(code);
    return this.setState({ code });
  }

  handleAddVariable() {}

  handleRemoveVariable() {}

  render() {
    return (
      <div>
        <Form className="form-horizontal">
          <FormGroup controlId="code">
            <Col sm={12}>
              <CodeEditor
                onChange={this.handleCodeChange}
                code={this.state.code}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="code">
            <Col sm={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.compileHandler}>
                Run
              </Button>
              <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
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
      </div>
    );
  }
}

export default Editor;
