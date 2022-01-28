import { Dispatch } from 'redux';
import axios from 'axios';

import { COUNTRIES_API_BASE_URL } from '../constants/apis';
import * as actionTypes from './actionTypes';

const getCountriesStart = () => ({
  type: actionTypes.GET_COUNTRIES_START
});

const getCountriesSuccess = (countries: []) => ({
  type: actionTypes.GET_COUNTRIES_SUCCESS,
  payload: countries
});

const getCountriesFail = (error: string) => ({
  type: actionTypes.GET_COUNTRIES_FAIL,
  error
});

export const getCountries = () => {
  return (dispatch: Dispatch) => {
    dispatch(getCountriesStart());
    axios
      .get(COUNTRIES_API_BASE_URL)
      .then(res => res.data)
      .then(res => dispatch(getCountriesSuccess(res)))
      .catch(err => dispatch(getCountriesFail(err)));
  };
};