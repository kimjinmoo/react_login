import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'element-closest-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import {store} from './store'

import App from './components/App';

import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'

import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
