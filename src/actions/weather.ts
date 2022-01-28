import { Dispatch } from 'redux';
import axios from 'axios';

import { WEATHER_API_BASE_URL } from '../constants/apis';
import weatherApiKey from '../constants/apiKeys';
import * as actionTypes from './actionTypes';


const getWeatherStart = () => ({
  type: actionTypes.GET_WEATHER_START
});

const getWeatherSuccess = (weather: any) => ({
  type: actionTypes.GET_WEATHER_SUCCESS,
  payload: weather
});

const getWeatherFail = (error: string) => ({
  type: actionTypes.GET_WEATHER_FAIL,
  error
});

export const getWeather = (country: string) => {
  return (dispatch: Dispatch) => {
    dispatch(getWeatherStart());
    axios
      .get(`${WEATHER_API_BASE_URL}?q=${country}&units=metric&appid=${weatherApiKey}`)
      .then(res => res.data)
      .then(res => dispatch(getWeatherSuccess(res)))
      .catch(err => dispatch(getWeatherFail(err)));
  };
};

