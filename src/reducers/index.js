import { combineReducers } from 'redux';
import requests from './requestReducer';
import bloods from './bloodReducer';
import staticLists from './staticListsReducer';


const rootReducer = combineReducers({
  requests,
  bloods,
  staticLists
});

export default rootReducer;
