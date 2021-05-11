import React, { useState } from "react";
import "./App.scss";
import Converter from "./components/Converter/Converter";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello and welcome to my</h1>
                <p>Temperature Converter</p>
                <Converter />
            </header>
        </div>
    );
}

export default App;
