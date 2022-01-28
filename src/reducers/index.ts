import { combineReducers } from 'redux';

import weather from './weather';
import countries from './countries';

const rootReducer = combineReducers({
  weather,
  countries
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;