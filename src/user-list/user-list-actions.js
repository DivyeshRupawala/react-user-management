import C from './user-list-constants'

export const removeUserData = (id) => {
	return {
		type: C.REMOVE_USER_DATA,
		payload: id
	}
}

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

export const showModal = (title, body, okButtonName, closeButtonName, isShow) => {
	return {
		type : C.SHOW_MODAL,
		payload : {title, body, okButtonName, closeButtonName, isShow}
	}
}

export const closeModal = () => 
	({
		type : C.CLOSE_MODAL,
		payload : {"title" : "", "body":"", "okButtonName":"", "closeButtonName":"", "isShow" :false}
	})
