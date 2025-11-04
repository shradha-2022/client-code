import './App.css';
import Editor from '@monaco-editor/react';
import { useState, useEffect } from "react";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const submitCode = () => {
    setLoading(true);
    const payload = {
      language: language,
      code: code,
    };
    // I will replace this with the actual API endpoint
    fetch("https://<your-api-endpoint>", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.body);
        setLoading(false);
      })
      .catch(() => {
        setOutput("Error: Could not connect to the server.");
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log(code);
  }, [code]);

  return (
    <div className="App">
      <div className="language-bar">
        <button
          className={language === "python" ? "active" : ""}
          onClick={() => {
            setLanguage("python");
          }}
        >Python</button>
        <button
          className={language === "java" ? "active" : ""}
          onClick={() => {
            setLanguage("java");
          }}
        >Java</button>
        <button
          className={language === "cpp" ? "active" : ""}
          onClick={() => {
            setLanguage("cpp");
          }}
        >C++</button>
        <button onClick={submitCode} disabled={loading}>
          {loading ? "Running..." : "Submit"}
        </button>
      </div>

      <div className="main-content">
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
        <div className="output-window">
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;