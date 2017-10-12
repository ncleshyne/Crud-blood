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
    { id:'1', title: 'Johnny Deep', bloodId: 'a1', description: 'Aplastic Anemia', location: 'Assumption diagnostic center-assumption road'},
    { id:'2', title: 'Vin Diesel', bloodId: 'a2', description: ' Myelodysplastic syndrome', location: 'Baguio General Hospital - Gov. Pack Road'},
    { id:'3', title: 'Robert De Niro', bloodId: 'a3', description: 'Myelofibrosis', location: 'Baguio Medical Center - Military Cut-Off Road'},
    { id:'4', title: 'Tom Hanks', bloodId: 'a4', description: 'Leukemia', location: 'BCU-Sto. Niño de Jesus Medical Center Foundation, Inc. - Lower P. Burgos Street'},
    { id:'5', title: 'Al Pacino', bloodId: 'a5', description: 'Digestive system cancers', location: 'Fort del Pilar Station Hospital - PMA Fort del Pilar'},
    { id:'6', title: 'Sean Penn', bloodId: 'a6', description: 'Malaria', location: 'Notre Dame de Chartres Hospital - Gen. Luna Road'},
    { id:'7', title: 'Morgan Freeman', bloodId: 'a7', description: 'Hemophilia', location: 'Pines City Doctors Hospital - Magsaysay Avenue'},
    { id:'8', title: 'Clint EastWood', bloodId: 'a8', description: 'Heparin', location: 'Saint Louis University Hospital of Sacred Heart - Saint Louis University Campus,Assumption Road'}
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