import React, {useState, useEffect} from "react";
import appicon from "./appicon.png";
import "./App.css";

function App (){

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-name">
            Aime
          </div>
          <img src={appicon} className="App-logo" alt="app-icon" />
        </header>
      </div>
    );
}

export default App;
