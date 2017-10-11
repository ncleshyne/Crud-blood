import * as actions from './../actions/actionConstants'

export default function bloodReducer(state = [], action ) {
  switch(action.type) {
    case actions.LOAD_BLOODS_SUCCESS:
      return action.bloods;

    default:
      return state;
  }
}
