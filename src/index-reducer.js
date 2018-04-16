import { combineReducers } from 'redux'
import userData from './add-user/add-user-reducer'
import modalPopup from './share/components/modal-popup/modal-popup-reducer'

export default combineReducers({ 
						  userData,
						  modalPopup
						});