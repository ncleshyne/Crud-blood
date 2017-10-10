import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from './../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';


class ManageCoursePage extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.state = { // mutable local state
      course: Object.assign({}, this.props.course),
      errors: {}
    }

    // bind here for performace. It doens't re-create the fucntion on re-rendering
    this.onClickSave = this.onClickSave.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Maybe if course comes from ajax call, we need to check if it is necessary to run this. I am not sure yet...
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({ course: Object.asign({}, nextProps.course) });
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    const course = this.state.course;
    course[field] = event.target.value;
    this.setState({ course });
  }

  isValid() {
    const errors = {};

    if (this.state.course.title.length <= 0) {
      errors.title = 'Title field is required!!!!!!!!!!';
    }

    if (this.state.course.authorId.length <= 1) {
      errors.authorId = 'Select Author !!!!!!!!!!';
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  onClickSave(event) {
    event.preventDefault();
    if (!this.isValid()){
      return;
    }
    this.props.actions.createCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render(){
    return (
      <CourseForm
        course={this.state.course}
        allAuthors={this.props.authors}
        errors={this.state.errors}
        staticLists={this.props.staticLists}
        onChange={this.updateCourseState}
        onSave={this.onClickSave}
      />
    )
  }
}

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;
  let course = { id: '', title: '', authorId: '' };

  if (courseId) {
    course = state.courses.filter(obj => obj.id === courseId)[0];
  }

  const authors = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    }
  });

  return {
    course: course,
    authors,
    staticLists: state.staticLists,
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
