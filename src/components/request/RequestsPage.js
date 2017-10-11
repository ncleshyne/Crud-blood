import React from 'react';
import { connect } from 'react-redux';
import * as requestActions from './../../actions/requestActions';
import { bindActionCreators } from 'redux';
import RequestList from './RequestList';


class RequestsPage extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.removeRequest = this.removeRequest.bind(this);
  }

  removeRequest(requestId) {
    this.props.actions.removeRequest(requestId);
  }

  render(){
    return (
      <div className="container">
        <RequestList requests={this.props.requests} removeRequest={this.removeRequest}></RequestList>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const list = state.requests.map(request => {
    return {
      ...request,
      blood: state.bloods.filter(blood => request.bloodId === blood.id)[0]
    }
  });
  return {
    requests: list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
    actions: bindActionCreators(requestActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestsPage);
