import React from 'react'
import {Link} from 'react-router'
import logo from '../../assests/images/logo.svg';

const Header = () => 
	(
		<header className="App-header">
          <Link to="/" >
            <img src={logo} className="App-logo" alt="logo" />
          </Link>

          <div className="menu-panel">
            <Link to='addUser'>Add User</Link>
            <Link to='userList'>User List</Link>                      
          </div>          
        </header>
	)

export default Header;	