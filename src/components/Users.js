import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  renderUsers() {
    return this.props.user.map(user => {
      return (
        <li key={user.username}>
          <div>{user.username}</div>
          <div>{user.hometown}</div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderUser()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
mapStateToProps = state => ({
   users: state.users, userCount: state.users.length
})


// connect this component to Redux
export default connect (mapStateToProps)(Users)
