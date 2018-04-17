import React, {Component} from 'react'
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import AddUser from './add-user/AddUser';
import UserList from './user-list/UserList';
import GithubUsers from './github-users/GithubUsers'

export default class Routes extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={AddUser} />
					<Route path="/addUser" component={AddUser} />
					<Route path="/addUser/:id" component={AddUser} />
					<Route path="/userList" component={UserList} />
					<Route path="/githubUsers" component={GithubUsers} />
				</Route>
			</Router>
		)
	}
}
