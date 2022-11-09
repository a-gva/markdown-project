import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { inputSample } from './inputsample';
import './App.css';

function App() {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setInput(inputSample);
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  function parseMarkdown(inputText: any) {
    const htmlText = inputText
      // .replace(/.*/gim, '<p>$1</p>')

      // headings
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
      .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
      .replace(/^###### (.*$)/gim, '<h6>$1</h6>')

      // hr line
      .replace(/-{3}/gim, '<hr>')
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')

      // bold
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
      .replace(/\*\*\s?([^\n]+)\*\*/gim, '<b>$1</b>')
      .replace(/__([^_]+)__/gim, '<b>$1</b>')

      // italics
      .replace(/\*(.*)\*/gim, '<i>$1</i>')
      .replace(/\*\s?([^\n]+)\*/gim, '<i>$1</i>')
      .replace(/\*\s?([^\n]+)\*/gim, '<i>$1</i>')
      .replace(/_([^_`]+)_/gim, '<i>$1</i>')

      // images
      .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")

      // links
      .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")

      // line breaks
      .replace(/\n$/gim, '<br />')
      .replace(/(.+?)(\n|$)+/gim, '<p>$1</p>\n\n');

    return htmlText.trim();
  }

  return (
    <div className="app">
      {/* header */}
      <div className="header">
        <h2>Markdown Live Preview</h2>
        <button onClick={refreshPage}>Input sample</button>
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
            // value={inputSample}
            defaultValue={inputSample}
          ></textarea>
        </div>
        {/* markdown */}
        <div className="item">
          <h4 className="">Markdown Output</h4>
          <div
            className="markdown"
            data-testid="markdown"
            id="markdown"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parseMarkdown(input)) }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
