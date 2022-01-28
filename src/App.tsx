import React from 'react';

import Header from './components/Header';
import WeatherBox from './components/WeatherBox';

import './App.css';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <WeatherBox />
    </div>
  );
}

export default App;
