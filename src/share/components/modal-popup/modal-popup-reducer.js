import C from './modal-popup-constants'

const modalPopup = (state=[], action) => {
	switch(action.type) {
	    case C.SHOW_MODAL :
	    	let obj = Object.assign({}, action.payload);	      
	      	return obj;
	    case C.CLOSE_MODAL :
	    	let pObj = Object.assign({}, action.payload);	      
	      	return pObj;   
	    default:
	      return state
	  }
}

export default modalPopup;
