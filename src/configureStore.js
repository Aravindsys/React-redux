import {createStore, combineReducers} from 'redux';
import {reducersName,reducersRole,initialState} from './reducer';

export const ConfigureStore = () => {
  return createStore(combineReducers({
      name: reducersName,
      role: reducersRole}
      ),initialState);
};

