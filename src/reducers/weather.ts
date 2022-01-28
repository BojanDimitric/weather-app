import * as actionTypes from '../actions/actionTypes';
import { WeatherType, WeatherActionType } from '../constants/types';

const initialState: WeatherType = {
  weatherLoading: false,
  weather: {},
  weatherError: ''
};

const weather = (
  state: WeatherType = initialState,
  action: WeatherActionType
) => {
  switch (action.type) {
    case actionTypes.GET_WEATHER_START:
      return {
        ...state,
        weatherLoading: true
      };
    case actionTypes.GET_WEATHER_SUCCESS:
      return {
        ...state,
        weatherLoading: false,
        weather: action.payload,
        weatherError: ''
      };
    case actionTypes.GET_WEATHER_FAIL:
      return {
        ...state,
        weatherLoading: false,
        weatherError: action.error
      };
    default:
      return state;
  };
};

export default weather;