import * as actions from './../actions/actionConstants'

export default function staticListsReducer(state = [], action ) {
  switch(action.type) {
    case actions.LOAD_STATIC_LISTS:
      return action.staticLists;

    default:
      return state;
  }
}
