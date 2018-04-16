import React, {Component} from 'react'
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from '../App';
import AddUser from '../add-user/AddUser';
import UserList from '../user-list/UserList';

export default class routes extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={AddUser} />
					<Route path="/addUserData" component={AddUser} />
					<Route path="/addUserData/:id" component={AddUser} />
					<Route path="/userDataList" component={UserList} />
				</Route>					
			</Router>
		)
	}
}
