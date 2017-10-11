import * as actions from './../actions/actionConstants'

const initialState = [];

export default function requestReducer(state = initialState, action ) {
  switch(action.type) {
    case actions.LOAD_REQUESTS_SUCCESS:
      return action.requests;

    case actions.CREATE_REQUEST:
      return [
        ...state,
        Object.assign({}, action.request, { id: state.length + 1 + ''})
      ];

    case actions.UPDATE_REQUEST:
      return [
        ...state.filter(request => request.id !== action.request.id),
        Object.assign({}, action.request)
      ];

    case actions.REMOVE_REQUEST:
      return [
        ...state.filter(request => request.id !== action.requestId),
      ];

    default:
      return state;
  }
}
