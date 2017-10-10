import * as actions from './../actions/actionConstants'

const initialState = [];

export default function courseReducer(state = initialState, action ) {
  switch(action.type) {
    case actions.LOAD_COURSES_SUCCESS:
      return action.courses;

    case actions.CREATE_COURSE:
      return [
        ...state,
        Object.assign({}, action.course, { id: state.length + 1 + ''})
      ];

    case actions.UPDATE_COURSE:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    case actions.REMOVE_COURSE:
      return [
        ...state.filter(course => course.id !== action.courseId),
      ];

    default:
      return state;
  }
}
