import React from 'react'
import { Button } from 'reactstrap';
import InputWithLabel from '../share/components/InputWithLabel'
import PanelWithHeader from '../share/components/PanelWithHeader'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addUserData, editUserData } from './add-user-actions'

const AddUser = ({userData, onAddUserData=f=>f, onEditUserData=f=>f}) => {
	let _userId, _title, _body, _id=0;
	
	if (userData && userData[0]) {
		_id = userData[0].id;
		_userId = userData[0].userId;
		_title = userData[0].title;
		_body = userData[0].body;		
	}

	const USER_ID = "userId";
	const TITLE_ID = "titleId";
	const BODY_ID = "bodyId";	

	const clickHandler = () => {
		if (_id > 0) {
			onEditUserData(getObject ());	
		} else {
			onAddUserData(getObject());			
		}
		
		window.location = "#/userList"		
	}

	const getObject = () => {
		return {
			"id": _id,
		    "userId": _userId,		    
		    "title": _title,
		    "body": _body
		}
	}

	const onChangeValue = (event, id) => {		
		let value = event.currentTarget.value;
		if (id === USER_ID) {
			_userId = value;			
		} else if (id === TITLE_ID) {
			_title = value;
		} else {
			_body = value;
		}
	}

	return (	
		<PanelWithHeader title="Add User">
		  	<InputWithLabel label="User ID" type="number" id={USER_ID} defaultVal={_userId} onChangeValue={onChangeValue}/>
	    	<InputWithLabel label="Title" type="text" id={TITLE_ID} defaultVal={_title} onChangeValue={onChangeValue}/>
	    	<InputWithLabel label="Body" type="text" id={BODY_ID} defaultVal={_body} onChangeValue={onChangeValue}/>	    	
	    	<Button color="primary" onClick={clickHandler}>Submit</Button>
		</PanelWithHeader>
	)
}

const mapStateToProps = (state, props) => 
	({		
		userData : props.routeParams.id ?  state.userData.list.filter(data => data.id == props.routeParams.id) : []	
	})

const mapDispatchToProps = dispatch => 
	({
		onAddUserData({id, userId, title, body}) {
			dispatch(
				addUserData(id, userId, title, body)
			)
		},
		onEditUserData({id, userId, title, body}) {
			dispatch(
				editUserData(id, userId, title, body)
			)
		}
	})	

const Container = connect(mapStateToProps, mapDispatchToProps)(AddUser)	

export default withRouter(Container)