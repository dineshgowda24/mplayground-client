import React, { Component } from "react";
//import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/golang";
import "brace/theme/monokai";

const editorStyle = {
    border: '1px solid lightgray',
  };
class CodeEditor extends Component {
  render() {
    let code = `let x = "This is the Mlang"`;
    return (
      <div>
        <AceEditor
           style={editorStyle}
           readOnly={false}
           width="100%"
           height="300px"
           mode="javascript"
           theme="monokai"
           name="aceCodeEditor"
           fontSize={14}
           showPrintMargin
           onChange={this.props.onChange}
           showGutter
           highlightActiveLine
           value={this.props.code}
           editorProps={{
             $blockScrolling: true,
             enableBasicAutocompletion: true,
             enableLiveAutocompletion: true,
             enableSnippets: true,
           }}
           setOptions={{
             showLineNumbers: true,
             tabSize: 2,
           }}
        />
      </div>
    );
  }
}

export default CodeEditor;
