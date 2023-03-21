import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'
// import About from './components/About';
import React, { useState } from 'react';
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import './App.css';


// let name = "Abhinav";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })

    setTimeout( ()=> {
        setAlert(null);
    }, 2000);
  }
  const changeMode = ()=> {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
  }

  return (
  <>
  {/* <Router> */}
    <Navbar title="TextUtils" about="About" mode={mode} changeMode={changeMode}></Navbar>
    <Alert alert = {alert}></Alert>
    <div className="container my-3">
    {/* <Routes> */}
    {/* <Route exact path="/" element={<><Textform heading = "Enter the text here" mode={mode} showAlert={showAlert}></Textform></>}> */}
    <Textform heading = "Enter the text here" mode={mode} showAlert={showAlert}></Textform>
    {/* </Route> */}
    {/* <Route exact path="/About" element={<><About></About></>}> */}
    
    {/* </Route> */}
    {/* </Routes> */}
    </div>
  {/* </Router> */}
  </>
  );
}

export default App;
