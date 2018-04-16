import C from './user-list-constants'

export const removeUserData = (id) => {
	return {
		type: C.REMOVE_USER_DATA,
		payload: id
	}
}
