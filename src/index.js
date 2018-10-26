import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'; //surrounds App, provides the App with the store
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
