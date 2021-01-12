import './App.css';
import Form from "./Components/Form"
import WeatherDisplay from "./Components/WeatherDisplay"
import React from "react"

function App() {
  const apiKey = "0894ac882d6d12ae8c204fe84028ce00"
  const [weather, setWeather] = React.useState(null)
  const getWeather = async (searchTerm) => {
    console.log(searchTerm)
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${searchTerm},us&appid=${apiKey}`)
    const data = await response.json()
    console.log("data",data)
    setWeather(data)
  }
  return (
    <div className="App">
      <h1>Weather</h1>
      <Form getWeather={getWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}
export default App;
