import React from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course, removeCourse}) => {
  return (
    <tr>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}, {course.author.firstName} {course.author.lastName}</td>
      <td>{course.level}</td>
      <td>{course.tags && course.tags.join(', ')}</td>
      <td>{course.description}</td>
      <td>{course.location}</td>
      <td><input type="button" value="Remove" onClick={removeCourse.bind(null, course.id)} /></td>
    </tr>
  )
};

export default CourseListRow;
