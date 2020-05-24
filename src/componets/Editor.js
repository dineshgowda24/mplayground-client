import React, { Component } from "react";
import CodeEditor from "./CodeEditor";
import Output from "./Output";
import { Col, Row, Tabs, Tab } from "react-bootstrap";
import AddVariable from "./AddVariable";
import VariableList from "./VariableList";
import Branding from "./Branding";
import { AiFillContainer } from "react-icons/ai";
import { FiTerminal } from "react-icons/fi";
import "../App.css";
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
      navactive: 0,
    };
    this.handleRunEvent = this.handleRunEvent.bind(this);
    this.handleCodeChangeEvent = this.handleCodeChangeEvent.bind(this);
    this.handleAddVariableEvent = this.handleAddVariableEvent.bind(this);
    this.handleTabClickEvent = this.handleTabClickEvent.bind(this);
  }

  handleRunEvent() {
    const { code } = this.state;
    this.setState(
      {
        navactive: 1,
      },
      console.log(this.state.navactive)
    );
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

  handleTabClickEvent(key) {
    console.log(key);
    this.setState({ navactive: key });
  }
  render() {
    return (
      <div>
        <Branding handleClickEvent={this.handleRunEvent} />
        <Row>
          <Col className="noPadding" colSize={8}>
            <CodeEditor
              onChange={this.handleCodeChangeEvent}
              code={this.state.code}
            />
            {/* <Output
              show={this.state.response.status === "0"}
              message={this.state.response.result}
            /> */}
          </Col>
          <Col className="noPadding">
            <Tabs
              activeKey={this.state.navactive}
              onSelect={this.handleTabClickEvent}
            >
              <Tab
                eventKey={0}
                title={
                  <div>
                    <AiFillContainer /> Variables
                  </div>
                }
              >
                <AddVariable addVariableHandler={this.handleAddVariableEvent} />
                <VariableList data={this.state.variabledefs} />
              </Tab>
              <Tab
                eventKey={1}
                title={
                  <div>
                    <FiTerminal /> Eval
                  </div>
                }
              ></Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Editor;
