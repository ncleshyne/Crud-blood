import React from 'react';
import {Link} from 'react-router';

const RequestListRow = ({request, removeRequest}) => {
  return (
    <tr>
      <td><Link to={'/request/' + request.id}>{request.title}</Link></td>
      <td>{request.blood.type} {request.blood.rh}</td>
      <td>{request.description}</td>
      <td>{request.location}</td>
      <td><input type="button" value="Remove" onClick={removeRequest.bind(null, request.id)} /></td>
    </tr>
  )
};

export default RequestListRow;
