import { combineReducers } from 'redux';
import suggestionReducer from './suggestion';

const rootReducer = combineReducers({
  suggestionState: suggestionReducer,
});

export default rootReducer;