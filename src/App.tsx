import React from "react";
import "./App.scss";
import Converter from "./components/Converter/Converter";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Temperature Converter</h1>
                <Converter />
            </header>
        </div>
    );
};

export default App;
