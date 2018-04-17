import C from './github-users-constants'

const githubUsers = (state=[], action) => {
    switch(action.type) {
      case C.GET_GITHUB_USERS :
        return state
      case C.GET_GITHUB_USERS_SUCCESS :
          return [...action.payload]
      default:
        return state
    }
}

export default githubUsers
