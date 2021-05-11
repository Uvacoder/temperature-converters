import React, { useState } from "react";
import "./Converter.scss";

const Converter: React.FC = () => {
    const [celsius, setCelsius] = useState<number>(0);
    const [fahrenheit, setFahrenheit] = useState<number>(0);

    function convertFahrenheitToCelsius(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        // (50°F - 32) x .5556 = 10°C
        setCelsius((Number(e.target.value) - 32) * 0.5556);
        setFahrenheit(Number(e.target.value));
    }

    function convertCelsiusToFahr(e: React.ChangeEvent<HTMLInputElement>) {
        // (30°C x 1.8) + 32 = 86°F
        setFahrenheit(Number(e.target.value) * 1.8 + 32);
        setCelsius(Number(e.target.value));
    }

    return (
        <div>
            <label>Celsius ºC</label>
            <input
                type="number"
                value={celsius}
                onChange={convertCelsiusToFahr}
            />
            <label>Fahrenheit ºF</label>
            <input
                type="number"
                value={fahrenheit}
                onChange={convertFahrenheitToCelsius}
            />
        </div>
    );
};

export default Converter;
