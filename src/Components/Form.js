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
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
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
          <button className="btn btn-primary my-3 mx1" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-info my-3 mx-1" onClick={handleloClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-warning my-3 " onClick={handleExtraSpaces}>
            Remove ExtraSpace
          </button>
          <button className="btn btn-success my-3 mx-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-dark my-3 " onClick={handleClClick}>
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
          {text.length > 0 ? text.split(" ").length : text.length} Words and{" "}
          {text.length} Letters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter your text to prview it"}</p>
      </div>
    </>
  );
}
