import { call, put, takeEvery } from 'redux-saga/effects'
import C from './add-user-constants'
import { postUser, putUser} from './add-user-api'

export function* addUserData(action) {
   try {
       const userData = yield call (postUser,action.payload.listObj);          
       // Instructing middleware to dispatch corresponding action.
       yield put({type: C.ADD_USER_DATA_SUCCESS, payload : {fetching : false, listObj : userData}});
       yield put({type: C.SHOW_MODAL, payload : {"title" : "Success", "body":"Record has been added succesfully.", "okButtonName":"OK", "closeButtonName":"Cancel", "isShow" :true}});                 
   } catch (e) {
      yield put({type: C.ADD_ERROR, message: e.message});
   }
}

export function* editUserData(action) {
   try {
       const userData = yield call (putUser,action.payload.listObj);      
       userData.id = action.payload.listObj.id    
       // Instructing middleware to dispatch corresponding action.
       yield put({type: C.EDIT_USER_DATA_SUCCESS, payload : {fetching : false, listObj : userData}});
       yield put({type: C.SHOW_MODAL, payload : {"title" : "Success", "body":"Record has been updated succesfully.", "okButtonName":"OK", "closeButtonName":"Cancel", "isShow" :true}});                 
   } catch (e) {
      yield put({type: C.ADD_ERROR, message: e.message});
   }
}

// function* mySaga() {  
//   yield takeEvery(C.ADD_USER_DATA, addUserData)
//   yield takeEvery(C.EDIT_USER_DATA, editUserData)
  
// }

// export default mySaga;