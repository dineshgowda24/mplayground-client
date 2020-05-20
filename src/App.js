import React from "react";
import Editor from "./componets/Editor";
import Footer from "./componets/Footer";
import Branding from "./componets/Branding"


function App() {
  return (
    <div className="container">
      <Branding />
      <Editor/>
    </div>
  );
}

export default App;
