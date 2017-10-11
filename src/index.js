import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';
import './style.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = configureStore();

store.dispatch({
  type: 'LOAD_COURSES_SUCCESS',
  courses: [
    { id:'1', title: 'Johnny Deep', authorId: 'a1', description: '', location: ''},
    { id:'2', title: 'Vin Diesel', authorId: 'a2', description: '', location: ''},
    { id:'3', title: 'Robert De Niro', authorId: 'a3', description: '', location: ''},
    { id:'4', title: 'Tom Hanks', authorId: 'a4', description: '', location: ''},
    { id:'5', title: 'Al Pacino', authorId: 'a5', description: '', location: ''},
    { id:'6', title: 'Sean Penn', authorId: 'a6', description: '', location: ''},
    { id:'7', title: 'Morgan Freeman', authorId: 'a7', description: '', location: ''},
    { id:'8', title: 'Clint EastWood', authorId: 'a8', description: '', location: ''}
  ]
});

store.dispatch({
  type: 'LOAD_AUTHORS_SUCCESS',
  authors: [
    { id: 'a1', firstName: 'A', lastName: '+' },
    { id: 'a2', firstName: 'A', lastName: '-' },
    { id: 'a3', firstName: 'B', lastName: '+' },
    { id: 'a4', firstName: 'B', lastName: '-' },
    { id: 'a5', firstName: 'AB', lastName: '+' },
    { id: 'a6', firstName: 'AB', lastName: '-' },
    { id: 'a7', firstName: 'O', lastName: '+' },
    { id: 'a8', firstName: 'O', lastName: '-' }
  ]
});

// obviously 'courseLevel' and 'tagList' would come from a service call in most real apps.


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
)