import React from 'react';
import {render} from 'react-dom';
import './index.css';

import appReducer from './index-reducer'
import mySaga from './index-sagas'
import Routes from './Routes'

import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialState = {
	"userData" : {
		fetching : false,
		list : [
			{	
				"id": 1,
			    "userId": 1,		    
			    "title": "Welcome Title",
			    "body": "Welcome body"
			}
		]
	},	
	"modalPopup" : {
		title: "Title", 
        body:"Body",
        okButtonName : "Ok", 
        closeButtonName : "Cancel", 
        isShow : false
	}
};

const store = createStore(appReducer, initialState, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga)

Window.store = store;

render(
	<Provider store={store}>
		<Routes />
	</Provider>, document.getElementById('root'));

registerServiceWorker();
