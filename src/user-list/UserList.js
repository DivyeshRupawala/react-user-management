import React from 'react'
import PanelWithHeader from '../share/components/PanelWithHeader'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { removeUserData } from './user-list-actions'
import UserListTableHeader from './UserListTableHeader'

const UserList = ({userDataList, onRemoveUser=f=>f}) => {

	const userData = userDataList;
	
	const removeUser = (id) => {		
		onRemoveUser(id);		
	}

	const eachRow = (data, i) => {
		return (
			<tr key={i}>
			      <td>{data.userId}</td>
			      <td>{data.title}</td>
			      <td>{data.body}</td>						      
			      <td> 
			      <a onClick={() => removeUser(data.id)}>Remove </a>
			      	   <a href={'#addUser/'+data.id}>Edit </a>
			      </td>
			  </tr>
		)
	}
	
	return(
		(userData.length > 0 ?
					(<PanelWithHeader title="User List">
					    	 <table>
							  	<UserListTableHeader/>
							  <tbody>
								  {userData.map(eachRow)}								  			 
							  </tbody>							  
							</table>
					</PanelWithHeader>)
					:
					<h2> No data found. </h2>
		)
	)
}
	
const mapStateToProps = (state, props) => 
	({
		userDataList : state.userData.list
	})

const mapDispatchToProps = (dispatch) => 
	({
		onRemoveUser(id) {
			dispatch(
				removeUserData(id)
			)
		}
		
	})	

const Container = connect(mapStateToProps, mapDispatchToProps)(UserList)	

export default withRouter(Container)


	