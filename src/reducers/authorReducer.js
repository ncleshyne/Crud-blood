import * as actions from './../actions/actionConstants'

export default function authorReducer(state = [], action ) {
  switch(action.type) {
    case actions.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
