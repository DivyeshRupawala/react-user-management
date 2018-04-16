import C from './modal-popup-constants'

export const closeModal = () => 
	({
		type : C.CLOSE_MODAL,
		payload : {"title" : "", "body":"", "okButtonName":"", "closeButtonName":"", "isShow" :false}
	})