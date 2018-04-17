import { call, put } from 'redux-saga/effects'
import { getGithubUsersApi } from './github-users-api'
import C from './github-users-constants'

export function* getGithubUsers(action) {
   try {
       const users = yield call (getGithubUsersApi);
       // Instructing middleware to dispatch corresponding action.
       yield put({type: C.GET_GITHUB_USERS_SUCCESS, payload : users});
   } catch (e) {
      console.log("Error : " + e.message);
   }
}
