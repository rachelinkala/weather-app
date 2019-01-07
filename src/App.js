import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component {
  getWeather = async () => {
    const API_KEY = process.env.WEATHER_API_KEY;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
    <div>
      <Titles />
      <Form />
      <Weather />
    </div>
    );
  }
};

export default App;
