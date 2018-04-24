import React, { Component} from 'react'
import PanelWithHeader from '../share/components/PanelWithHeader'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getGithubUsers } from './github-users-actions'

class GithubUsers extends Component {
  componentDidMount() {
      this.props.onGetGithubUsers()
  }

  eachNode(value, i) {
    return (
      <div key={i} className='github-user-container'>
        <img src={value.avatar_url} alt={value.login}/>
        <span> {value.login} </span>
      </div>
    )
  }

  render() {
    const { githubUsers } = this.props;

    return (
      <PanelWithHeader title="Github Users">
            {
              githubUsers.length > 0 ? githubUsers.map(this.eachNode) : <h3>No Data Found </h3>
            }
      </PanelWithHeader>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log("GithubUsers.........")
  return {
		githubUsers : state.githubUsers
	}
}

const mapDispatchToProps = (dispatch) =>
	({
		onGetGithubUsers() {
			dispatch(
				getGithubUsers()
			)
		}

	})

const Container = connect(mapStateToProps, mapDispatchToProps)(GithubUsers)

export default withRouter(Container);
