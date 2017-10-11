import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as requestActions from './../../actions/requestActions';
import { bindActionCreators } from 'redux';
import RequestForm from './RequestForm';


class ManageRequestPage extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.state = { // mutable local state
      request: Object.assign({}, this.props.request),
      errors: {}
    }

    // bind here for performace. It doens't re-create the fucntion on re-rendering
    this.onClickSave = this.onClickSave.bind(this);
    this.updateRequestState = this.updateRequestState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.request.id !== nextProps.request.id) {
      this.setState({ request: Object.asign({}, nextProps.request) });
    }
  }

  updateRequestState(event) {
    const field = event.target.name;
    const request = this.state.request;
    request[field] = event.target.value;
    this.setState({ request });
  }

  isValid() {
    const errors = {};

    if (this.state.request.title.length <= 0) {
      errors.title = 'Name';
    }

    if (this.state.request.bloodId.length <= 1) {
      errors.bloodId = 'blood type';
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  onClickSave(event) {
    event.preventDefault();
    if (!this.isValid()){
      return;
    }
    this.props.actions.createRequest(this.state.request);
    this.context.router.push('/requests');
  }

  render(){
    return (
      <RequestForm
        request={this.state.request}
        allBloods={this.props.bloods}
        errors={this.state.errors}
        staticLists={this.props.staticLists}
        onChange={this.updateRequestState}
        onSave={this.onClickSave}
      />
    )
  }
}

ManageRequestPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const requestId = ownProps.params.id;
  let request = { id: '', title: '', bloodId: '' };

  if (requestId) {
    request = state.requests.filter(obj => obj.id === requestId)[0];
  }

  const bloods = state.bloods.map(blood => {
    return {
      value: blood.id,
      text: blood.type + ' ' + blood.rh
    }
  });

  return {
    request: request,
    bloods,
    staticLists: state.staticLists,
    requests: state.requests
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(requestActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRequestPage);
