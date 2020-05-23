import React, { Component } from "react";
import CodeEditor from "./CodeEditor";
import Output from "./Output";
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import AddVariable from "./AddVariable";
import VariableList from "./VariableList";
import Branding from "./Branding";
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
      navactive :"eval"
    };
    this.handleRunEvent = this.handleRunEvent.bind(this);
    this.handleCodeChangeEvent = this.handleCodeChangeEvent.bind(this);
    this.handleAddVariableEvent = this.handleAddVariableEvent.bind(this);
  }

  handleRunEvent(event) {
    event.preventDefault();
    const { code } = this.state;
    this.setState({
      navactive : "variables"
    })
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
    //Todo write code to handle duplicate values of variables
    this.setState({
      variabledefs: [...this.state.variabledefs, variable],
    });
  }

  handleRemoveVariable() {}

  render() {
    return (
      <div>
        <Branding handleClickEvent={this.handleRunEvent} />
        <Row>
          <Col>
            <CodeEditor
              onChange={this.handleCodeChangeEvent}
              code={this.state.code}
            />
            {/* <Output
              show={this.state.response.status === "0"}
              message={this.state.response.result}
            /> */}
          </Col>
          <Col>
            <Tabs defaultActiveKey={this.state.navactive} id="uncontrolled-tab-example">
              <Tab eventKey="variables" title="Variables">
                <AddVariable addVariableHandler={this.handleAddVariableEvent} />
                <VariableList data={this.state.variabledefs} />
              </Tab>
              <Tab eventKey="eval" title="Eval"></Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Editor;
