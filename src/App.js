import React from "react";
import Editor from "./componets/Editor";
import Footer from "./componets/Footer";
import Branding from "./componets/Branding"
import Variable from "./componets/Variable"
import AddVariable from "./componets/AddVariable";
import VariableList from "./componets/VariableList"

const data = ["int"]
function App() {
  return (
    <div className="container-fluid">
      {/* <Branding />
      <Editor/> */}
      <AddVariable/>
      <VariableList data={data}/>
       {/* <Variable name="next_block" value="test"/> */}
    </div>
  );
}

export default App;
