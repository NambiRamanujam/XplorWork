import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import gridReducer from '../components/grid/reducer';


const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  gridReducer
});

export default rootReducer;
