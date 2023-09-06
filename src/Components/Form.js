import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleClClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces Removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.Heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#404040" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
          <button disabled={text.length===0} className="btn btn-success mx-1 my-1 " onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button disabled={text.length===0}className="btn btn-success mx-1 my-1 " onClick={handleloClick}>
            Convert to lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-success mx-1 my-1  " onClick={handleExtraSpaces}>
            Remove ExtraSpace
          </button>
          <button disabled={text.length===0}className="btn btn-success mx-1 my-1 " onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0}className="btn btn-success mx-1 my-1  " onClick={handleClClick}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container mb-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} Words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
