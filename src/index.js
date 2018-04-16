import React from 'react';
import {render} from 'react-dom';

// Reducer
import { combineReducers } from 'redux'
//import userData from './user-list/user-list-reducer'
import userData from './add-user/add-user-reducer'

//Sagas
import { takeEvery } from 'redux-saga/effects'
import C from './add-user/add-user-constants'
import { addUserData, editUserData } from './add-user/add-user-sagas'

// Modal Popup Reducer
import modalPopup from './share/components/modal-popup/modal-popup-reducer'


import './index.css';
import Routes from './config/routes'
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

// Combine Reducer
const appReducer =  combineReducers({ 
						  userData,
						  modalPopup
						});

function* mySaga() {  
  yield takeEvery(C.ADD_USER_DATA, addUserData)
  yield takeEvery(C.EDIT_USER_DATA, editUserData)
}

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
