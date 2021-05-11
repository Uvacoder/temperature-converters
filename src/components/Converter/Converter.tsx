import React, { useState } from "react";
import "./Converter.scss";

const Converter: React.FC = () => {
    const [celsius, setCelsius] = useState<number>(0);
    const [fahrenheit, setFahrenheit] = useState<number>(32);

    function convertFahrenheitToCelsius(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        // (50°F - 32) x .5556 = 10°C
        const value = Number(e.target.value);
        setCelsius((value - 32) * 0.5556);
        setFahrenheit(value);
    }

    function convertCelsiusToFahr(e: React.ChangeEvent<HTMLInputElement>) {
        // (30°C x 1.8) + 32 = 86°F
        const value = Number(e.target.value);
        setFahrenheit(value * 1.8 + 32);
        setCelsius(value);
    }

    return (
        <div className="container">
            <div className="container-row">
                <label>Celsius (ºC)</label>
                <input
                    type="number"
                    value={celsius}
                    onChange={convertCelsiusToFahr}
                />
            </div>
            <div className="container-row">
                <label>Fahrenheit (ºF)</label>
                <input
                    type="number"
                    value={fahrenheit}
                    onChange={convertFahrenheitToCelsius}
                />
            </div>
        </div>
    );
};

export default Converter;
