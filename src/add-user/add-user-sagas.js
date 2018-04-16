import { call, put } from 'redux-saga/effects'
import USERCONSTANCE from './add-user-constants'
import MODALCONSTANCE from '../share/components/modal-popup/modal-popup-constants'
import { postUser, putUser} from './add-user-api'

export function* addUserData(action) {
   try {
       const userData = yield call (postUser,action.payload.listObj);          
       // Instructing middleware to dispatch corresponding action.
       yield put({type: USERCONSTANCE.ADD_USER_DATA_SUCCESS, payload : {fetching : false, listObj : userData}});
       yield put({type: MODALCONSTANCE.SHOW_MODAL, payload : getModalPopupObj("Record has been added succesfully.")});                 
   } catch (e) {
      console.log("Error : " + e.message);
   }
}

export function* editUserData(action) {
   try {
       const userData = yield call (putUser,action.payload.listObj);      
       userData.id = action.payload.listObj.id    
       // Instructing middleware to dispatch corresponding action.
       yield put({type: USERCONSTANCE.EDIT_USER_DATA_SUCCESS, payload : {fetching : false, listObj : userData}});
       yield put({type: MODALCONSTANCE.SHOW_MODAL, payload : getModalPopupObj("Record has been updated succesfully.")});                 
   } catch (e) {
      console.log("Error : " + e.message);
   }
}

var getModalPopupObj = (Msg) =>
  ({
    "title" : "Success", 
    "body":Msg, 
    "okButtonName":"OK", 
    "closeButtonName":"Cancel", 
    "isShow" :true
  })