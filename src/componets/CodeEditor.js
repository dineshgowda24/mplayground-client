import React, { Component } from "react";
//import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/tomorrow_night";

const editorStyle = {
    border: '1px solid lightgray',
  };
class CodeEditor extends Component {
  render() {
    return (
      <div>
        <AceEditor
           style={editorStyle}
           readOnly={false}
           width="50%"
           height="300px"
           mode="javascript"
           theme="tomorrow_night"
           name="aceCodeEditor"
           fontSize={17}
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
