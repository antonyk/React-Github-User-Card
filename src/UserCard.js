import React, { Component } from 'react'

class UserCard extends Component {

  render() {
    return (
      <div>
        <div className='card-title'>
          <h4>{this.props.user.login}</h4>
        </div>
        <div className='profile-img'>
          <img src={this.props.user.avatar_url} alt={`profile for user ${this.props.user.login}`} />
        </div>
        <div>
          <a className="App-link" href={this.props.user.repos_url} rel="noopener noreferrer">
            <span>GitHub Repos</span>
          </a>
        </div>
      </div>
    )
  }
}
export default UserCard;