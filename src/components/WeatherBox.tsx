import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../reducers';

import { getWeather } from '../actions/weather';

import './WeatherBox.scss';
 
const WeatherBox: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather('Serbia'));
  }, []);

  const weatherLoading = useSelector((state: RootState) => state.weather['weatherLoading']);

  const weather = useSelector((state: RootState) => state.weather['weather']);

  const weatherError = useSelector((state: RootState) => state.weather['weatherError']);

  return (
    <>
      {weatherLoading && <div className='info'><span>Loading weather data!</span></div>}
      {weather.hasOwnProperty('main') && weather.hasOwnProperty('wind') && (
        <div className='weather'>
          <div className='tile'>
            <div className='row'>
              <h4>Temperature</h4>
            </div>
            <div className='row'>
              <h5>Avg</h5>
              <h5>{weather.main.temp} <code>&#176;</code>C</h5>
            </div>
            <div className='row'>
              <h5>Max</h5>
              <h5>{weather.main.temp_max} <code>&#176;</code>C</h5>
            </div>
            <div className='row'>
              <h5>Min</h5>
              <h5>{weather.main.temp_min} <code>&#176;</code>C</h5>
            </div>
          </div>
          <div className='tile'>
            <div className='row'>
              <h4>Wind</h4>
            </div>
            <div className='row'>
              <h5>Speed</h5>
              <h5>{weather.wind.speed + ' m/s'}</h5>
            </div>
            <div className='row'>
              <h5>Direction</h5>
              <h5>{weather.wind.deg + ' deg'} </h5>
            </div>
          </div>
          <div className='tile'>
            <div className='row'>
              <h4>Humidity</h4>
            </div>
            <div className='row'>
              <h5>RH</h5>
              <h5>{weather.main.humidity + ' %'}</h5>
            </div>
          </div>
          <div className='tile'>
            <div className='row'>
              <h4>Pressure</h4>
            </div>
            <div className='row'>
              <h5>bar</h5>
              <h5>{weather.main.pressure + ' mbar'}</h5>
            </div>
          </div>
        </div>
      )}
      {weatherError && <div className='info'><span>Error loading weather data!</span></div>}
    </>
  );
};

export default WeatherBox;