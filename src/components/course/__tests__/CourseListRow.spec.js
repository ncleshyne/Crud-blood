import React from 'react';
import ReactDOM from 'react-dom';
import CourseListRow from './../CourseListRow';
import { shallow } from 'enzyme';

it('displays the course list row', () => {
  const div = document.createElement('div');
  const course = {
    id: '1',
    title: 'Redux course',
    author: {
      firstName: 'Leo',
      lastName: 'Correa'
    }
  };
  const removeCourse = function(){};

  // ReactDOM.render(<CourseListRow course={course} removeCourse={removeCourse} />, div);
  const wrapper = shallow(<CourseListRow course={course} removeCourse={removeCourse} />);

  // expect(wrapper.contains(<tr />)).toEqual(true);
});
