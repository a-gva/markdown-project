import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  return (
    <div className="app">
      {/* header */}
      <div className="header">
        <h3>Markdown Live Preview</h3>
      </div>
      {/* content */}
      <div className="box">
        {/* input */}
        <div className="item">
          <h4>Input</h4>
          <textarea
            autoFocus
            className=" 
              "
            onChange={(e) => setInput(e.target.value)}
            cols={60}
            rows={5}
          />
        </div>
        {/* markdown */}
        <div className="item">
          <h4 className="">Markdown Output</h4>
          <ReactMarkdown className="markdown">{input}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
