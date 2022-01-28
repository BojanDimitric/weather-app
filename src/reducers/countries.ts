import * as actionTypes from '../actions/actionTypes';
import { CountriesType, CountriesActionType } from '../constants/types';

const initialState: CountriesType = {
  countriesLoading: false,
  countries: [],
  countriesError: ''
};

const countries = (
  state: CountriesType = initialState,
  action: CountriesActionType
) => {
  switch (action.type) {
    case actionTypes.GET_COUNTRIES_START:
      return {
        ...state,
        countriesLoading: true
      };
    case actionTypes.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countriesLoading: false,
        countries: action.payload,
        countriesError: ''
      };
    case actionTypes.GET_COUNTRIES_FAIL:
      return {
        ...state,
        countriesLoading: false,
        countriesError: action.error
      };
    default:
      return state;
  };
};

export default countries;