import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from './../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';


class CoursesPage extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.removeCourse = this.removeCourse.bind(this);
  }

  removeCourse(courseId) {
    this.props.actions.removeCourse(courseId);
  }

  render(){
    return (
      <div className="container">
        <CourseList courses={this.props.courses} removeCourse={this.removeCourse}></CourseList>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const list = state.courses.map(course => {
    return {
      ...course,
      author: state.authors.filter(author => course.authorId === author.id)[0]
    }
  });
  return {
    courses: list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => { return dispatch(courseActions.createCourse(course)) }
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
