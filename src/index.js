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
  type: 'LOAD_REQUESTS_SUCCESS',
  requests: [
    { id:'1', title: 'Johnny Deep', bloodId: 'a1', description: '', location: ''},
    { id:'2', title: 'Vin Diesel', bloodId: 'a2', description: '', location: ''},
    { id:'3', title: 'Robert De Niro', bloodId: 'a3', description: '', location: ''},
    { id:'4', title: 'Tom Hanks', bloodId: 'a4', description: '', location: ''},
    { id:'5', title: 'Al Pacino', bloodId: 'a5', description: '', location: ''},
    { id:'6', title: 'Sean Penn', bloodId: 'a6', description: '', location: ''},
    { id:'7', title: 'Morgan Freeman', bloodId: 'a7', description: '', location: ''},
    { id:'8', title: 'Clint EastWood', bloodId: 'a8', description: '', location: ''}
  ]
});

store.dispatch({
  type: 'LOAD_BLOODS_SUCCESS',
  bloods: [
    { id: 'a1', type: 'A', rh: '+' },
    { id: 'a2', type: 'A', rh: '-' },
    { id: 'a3', type: 'B', rh: '+' },
    { id: 'a4', type: 'B', rh: '-' },
    { id: 'a5', type: 'AB', rh: '+' },
    { id: 'a6', type: 'AB', rh: '-' },
    { id: 'a7', type: 'O', rh: '+' },
    { id: 'a8', type: 'O', rh: '-' }
  ]
});


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
)