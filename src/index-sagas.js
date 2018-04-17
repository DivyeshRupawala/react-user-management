import { takeEvery } from 'redux-saga/effects'
import C from './add-user/add-user-constants'
import GITHUB_USERS_CONSTANTS from './github-users/github-users-constants'
import { addUserData, editUserData } from './add-user/add-user-sagas'
import  { getGithubUsers } from './github-users/github-users-sagas'

export default function* mySaga() {
  yield takeEvery(C.ADD_USER_DATA, addUserData)
  yield takeEvery(C.EDIT_USER_DATA, editUserData)
  yield takeEvery(GITHUB_USERS_CONSTANTS.GET_GITHUB_USERS, getGithubUsers)
}
