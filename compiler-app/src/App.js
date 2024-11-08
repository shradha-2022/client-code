import './App.css';
import Editor from '@monaco-editor/react';
import { useState, useEffect } from "react";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");

  const submitCode = () => {
    // we will revisit this code and add the API logic for it
    console.log(code);
  };

  useEffect(() => {
    console.log(code);
  }, [code]);

  return (
    <div className="App">
      <button 
        style={{
          background: language === "python" ? "black" : "white",
          color: language === "python" ? "white" : "black",
        }}
        onClick={() => {
          setLanguage("python");
        }}
      >Python</button>
      <button 
        style={{
          background: language === "java" ? "black" : "white",
          color: language === "java" ? "white" : "black",
        }}
        onClick={() => {
          setLanguage("java");
        }}
      >Java</button>
      <button 
        style={{
          background: language === "cpp" ? "black" : "white",
          color: language === "cpp" ? "white" : "black",
        }}
        onClick={() => {
          setLanguage("cpp");
        }}
      >C++</button>
      <button onClick={submitCode}>Submit</button>
      
      <Editor 
        onChange={(e) => {
          setCode(e);
        }}
        value={code}
        height="90vh"
        theme="vs-dark"
        defaultLanguage="python"
        defaultValue="// some comment"
      />
    </div>
  );
}

export default App;
