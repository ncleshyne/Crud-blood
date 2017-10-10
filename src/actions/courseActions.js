import * as actions from './actionConstants'

export function createCourse(course) {
  if (course.id) {
    return { type: actions.UPDATE_COURSE, course };
  }

  return { type: actions.CREATE_COURSE, course };
}

export function removeCourse(courseId) {
  return { type: actions.REMOVE_COURSE, courseId };
}
