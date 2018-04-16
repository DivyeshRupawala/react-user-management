import { takeEvery } from 'redux-saga/effects'
import C from './add-user/add-user-constants'
import { addUserData, editUserData } from './add-user/add-user-sagas'

export default function* mySaga() {  
  yield takeEvery(C.ADD_USER_DATA, addUserData)
  yield takeEvery(C.EDIT_USER_DATA, editUserData)
}