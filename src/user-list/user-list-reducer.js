import C from './user-list-constants'

const userData = (state=[], action) => {
	switch(action.type) {		
	    case C.REMOVE_USER_DATA :
	    	let pList = state.list.filter(user => user.id !== action.payload);
	    	return {fetching : state.fetching, list : pList};	        
	    case C.ADD_USER_DATA_SUCCESS:
	    	return {fetching : action.payload.fetching, list : [...state.list, action.payload.listObj]};	    
	    case C.EDIT_USER_DATA_SUCCESS :
	     	let list = state.list.map(user => {
	      		if (user.id === action.payload.listObj.id) {
	      			let obj = Object.assign({}, action.payload.listObj);
	      			return obj;
	      		} else {
	      			return user;
	      		}	      	 
	      	})	     	
	    	return {fetching : action.payload.fetching, list : list};	      
	    default:
	      return state;
	}
}

export default userData;