import React, {useState} from 'react'

export default function (props) {
    const handleUpperCase = () => {
          console.log("Upper case was clicked");
          let uctext = text.toUpperCase();
          setText(uctext);
          props.showAlert("Converted to Upper Case 👍", "success");
    }
    const handleLowerCase = () => {
          console.log("Lower case was clicked");
          let lctext = text.toLowerCase();
          setText(lctext);
          props.showAlert("Converted to Lower Case 👍", "success");
    }
    const handleClearText = () => {
          console.log("Clear text was clicked");
          let ctext = "";
          setText(ctext);
          props.showAlert("Cleared Sucessfully", "success");
    }
    const handleOnchange = (event) => {
          console.log("On click");
          setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
    <h1 style = {{color : props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
    <div className="mb-3" style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
    <textarea className="form-control" placeholder='Enter your text here' value={text} style = {{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'light' ? 'black' : 'white'}} onChange= {handleOnchange}id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-success mx-2" onClick= {handleUpperCase}> Convert to UpperCase</button>
    <button className="btn btn-success mx-2" onClick= {handleLowerCase}> Convert to LowerCase</button>
    <button className="btn btn-success mx-2" onClick= {handleClearText}> Clear Text </button>
    <div className="container my-3" style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
      <h1> Your Text Summary </h1>
      <ul>
        <li> Your text has {text.split(" ").length} words and {text.length} characters </li>
        <li> This text will take approximately {0.008 * text.split(" ").length} minutes to read </li>
      </ul>
      <h1> Preview </h1>
      <p> {text === "" ? "Enter something to preview" : text} </p>
    </div>
    </>
  )
}
