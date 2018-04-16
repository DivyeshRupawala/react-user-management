import C from './add-user-constants'

export const addUserData = (id, userId, title, body) => {
	return {
		type : C.ADD_USER_DATA,
		payload : {fetching : true, listObj : {id, userId, title, body}}
	}
}

export const editUserData = (id, userId, title, body) => {
	return {
		type : C.EDIT_USER_DATA,
		payload : {fetching : true, listObj : {id, userId, title, body}}
	}
}
