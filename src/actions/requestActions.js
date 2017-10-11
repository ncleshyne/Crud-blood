import * as actions from './actionConstants'

export function createRequest(request) {
  if (request.id) {
    return { type: actions.UPDATE_REQUEST, request };
  }

  return { type: actions.CREATE_REQUEST, request };
}

export function removeRequest(requestId) {
  return { type: actions.REMOVE_REQUEST, requestId };
}
