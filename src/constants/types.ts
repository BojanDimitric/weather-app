export interface WeatherType {
  weatherLoading?: boolean;
  weather?: any;
  weatherError?: string;
}

export interface WeatherActionType {
  type: string;
  payload?: any;
  error?: string;
}

export interface CountriesType {
  countriesLoading?: boolean;
  countries?: [];
  countriesError?: string;
}

export interface CountriesActionType {
  type: string;
  payload?: [];
  error?: string;
}