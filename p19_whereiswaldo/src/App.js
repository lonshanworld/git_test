import React from "react";
import "./App.css";
import "./index.css"
import { useNavigate } from "react-router-dom";

function App() {

  const navi = useNavigate();

  return (
    <div className="App">
      <p className="maintitle">Shooting Game</p>
      <div>
        <p className="titletxt">Where is the Target?!</p>
        <span className="normaltxt">Find the target with your eyes...Kill them.</span>
        <span className="smalltxt">The game that help to increase the vision.</span>
        <div id="appbtndiv">
          <button className="signupbtn" onClick={() => navi(`/assign/signup`,{replace : false})} >Sign Up as New Player</button>
          <button className="loginbtn" onClick={() => navi(`/assign/login`,{replace : false})} >Log In as Old Player</button>
        </div>
      </div>
    </div>
  );
}

export default App;
