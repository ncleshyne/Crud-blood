import React from 'react';
import CourseListRow from './CourseListRow';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CourseList extends React.Component{

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h2>Save Lives by Donating Blood</h2>

        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Requester</th>
              <th>Blood Type</th>
              <th>Description</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <ReactCSSTransitionGroup
            transitionName="course-item"
            transitionLeave={true}
            transitionAppear={true}
            transitionAppearTimeout={700}
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}
            component="tbody"
          >
            {this.props.courses.map(course =>
                <CourseListRow key={course.id} course={course} removeCourse={this.props.removeCourse} />
            )}
          </ReactCSSTransitionGroup>
        </table>
      </div>
    )
  }

}

export default CourseList;
