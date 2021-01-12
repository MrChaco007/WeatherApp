import React from "react"
import {useState, useEffect} from "react"

const WeatherDisplay = ({ weather }) => {
    const [textColor, setTextColor] = useState("black")
    function changeColor(mainTemp) {
        const celsius = mainTemp - 273.15
        let fahrenheit = Math.floor(celsius * (9 / 5) + 32)
        if (fahrenheit <= 40) {
            setTextColor("blue")
        } else if (fahrenheit >= 90) {
            setTextColor("red")
        } else {
            setTextColor("black")
        }
    }

    useEffect(() => {
        changeColor(weather?.main?.temp)
    }, [weather?.main?.temp])
    
    function convertTemp(temp) {
        const celsius = temp - 273.15
        let fahrenheit = Math.floor(celsius * (9 / 5) + 32)
        return fahrenheit
    }
    const loaded = () => {
        return (
            <>
                <h1>City: {weather.name}</h1>
                <h2>Current Temperature: <span style={{ color: textColor }}>{convertTemp(weather.main.temp)}°F</span></h2>
                <p>Conditions: {weather.weather[0].description}</p>
                <h3>Low: {convertTemp(weather.main.temp_min)}°F</h3>
                <h3>High: {convertTemp(weather.main.temp_max)}°F</h3>
            </>
        )
    }
    const loading = () => {
        return <h1>Enter your zipcode above and press "Search" to find the weather in your area</h1>
    }
return weather ? loaded() : loading()


}

export default WeatherDisplay