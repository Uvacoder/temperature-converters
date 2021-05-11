import React, { useState } from "react";
import "./App.scss";
import Converter from "./components/Converter/Converter";

const App: React.FC = () => {
    return (
        <div className="App">
			<header className="App-header">
				<p>Hello Innotech</p>
                <Converter />
            </header>
        </div>
    );
}

export default App;
