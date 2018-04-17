import React from 'react'
import { Badge } from 'reactstrap';
import { connect } from 'react-redux'

const UserCountBadge = ({userDataList}) => {
  const userList = userDataList;

  return (
    <div className='userCountBadge'>
      User Count <Badge color="secondary">{userList.length}</Badge>
    </div>
  )
}

const mapStateToProps = (state, props) =>
	({
		userDataList : state.userData.list
	})

const Container = connect(mapStateToProps)(UserCountBadge)

export default Container
