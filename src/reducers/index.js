import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import staticLists from './staticListsReducer';


const rootReducer = combineReducers({
  courses,
  authors,
  staticLists
});

export default rootReducer;
