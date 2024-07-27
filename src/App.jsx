import React from 'react';
import Weather from './components/Weather';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
};

export default App;
