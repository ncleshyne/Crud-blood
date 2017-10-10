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
    { id:'1', title: 'Redux course cool', authorId: 'a1', level: 'adv', tags: [] },
    { id:'2', title: 'React course', authorId: 'a2', tags: ['rct', 'fp'] },
    { id:'3', title: 'Angular js', authorId: 'a1', description: 'This is the angular js course.', tags: [] }
  ]
});

store.dispatch({
  type: 'LOAD_AUTHORS_SUCCESS',
  authors: [
    { id: 'a1', firstName: 'Leonardo', lastName: 'Correa' },
    { id: 'a2', firstName: 'Cara', lastName: 'Nada' }
  ]
});

// obviously 'courseLevel' and 'tagList' would come from a service call in most real apps.
const courseLevel = [
  { value: 'bgn', text: 'beginer' },
  { value: 'intm', text: 'intermediate' },
  { value: 'adv', text: 'advanced' }
];
const tagList = [
  { value: 'fp', text: 'Functional Programming' },
  { value: 'es6', text: 'ES 2017 (ES6)' },
  { value: 'ng', text: 'Angular' },
  { value: 'rct', text: 'React' }
];
store.dispatch({
  type: 'LOAD_STATIC_LISTS',
  staticLists: {
    courseLevel,
    tagList
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
)
