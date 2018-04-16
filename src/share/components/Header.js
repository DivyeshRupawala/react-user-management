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
            <Link to='addUserData'>Add User Data</Link>
            <Link to='userDataList'>User Data List</Link>                      
          </div>          
        </header>
	)

export default Header;	