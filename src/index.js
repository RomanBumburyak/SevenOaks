import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Provider } from 'react-redux';

import configureStore from './store';

const store = configureStore();




ReactDOM.render(

<Provider store={store}>
 <App />
</Provider>
,
document.getElementById('root'));
registerServiceWorker();
