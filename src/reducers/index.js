import { combineReducers } from 'redux';
import requests from './requestReducer';
import authors from './authorReducer';
import staticLists from './staticListsReducer';


const rootReducer = combineReducers({
  requests,
  authors,
  staticLists
});

export default rootReducer;
