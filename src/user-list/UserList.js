import React from 'react'
import PanelWithHeader from '../share/components/PanelWithHeader'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { removeUserData } from './user-list-actions'

const UserList = ({userDataList, onRemoveUser=f=>f}) => {

	const userData = userDataList;
	
	const removeUser = (id) => {		
		onRemoveUser(id);		
	}
	
	return(
		(userData.length > 0 ?
					(<PanelWithHeader title="User List">
					    	 <table>
							  <thead>
							  <tr>
							     <th>User Id</th>
							     <th>Title</th>
							     <th>Body</th>
							     <th>Action</th>
							  </tr>
							  </thead>
							  <tbody>
								  {userData.map((data, i) =>
					                    <tr key={i}>
									      <td>{data.userId}</td>
									      <td>{data.title}</td>
									      <td>{data.body}</td>						      
									      <td> <a onClick={() => removeUser(data.id)}>Remove </a>
									      	   <a href={'#addUserData/'+data.id}>Edit </a>
									      </td>
									  </tr>)
								  }					 
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


	