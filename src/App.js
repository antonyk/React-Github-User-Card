import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import UserCard from './UserCard'

const defaultUsername = 'antonyk';
const pageSize = 5;

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: defaultUsername,
      userData: {},
      followersData: [],
      followingData: [],
    }
  }

  componentDidMount(prevProps, prevState) {
    this.getGithubData();

  }

  getGithubData() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(result => {
      // console.log(result)
      this.setState({
        userData: result.data
      });
      this.getUserFollowersData(this.state.username)
      this.getUserFollowingData(this.state.username)
    })
    .catch(err => {
      console.log(err)
    })
  }

  getUserFollowersData(username) {
    // get followers
    axios.get(`https://api.github.com/users/${username}/followers`)
    .then(result => {
      this.setState({
        followersData: result.data
      });
    })
    .catch(err => {
      console.log(err)
    })
  }

  getUserFollowingData(username) {
    // get following
    axios.get(`https://api.github.com/users/${username}/following`)
    .then(result => {
      this.setState({
        followingData: result.data
      });
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div><h3>GitHub Network</h3></div>
          <div className='header-spacer'></div>
        </header>
        <section className='app-body'>
          <h1>GitHub Cards</h1>
          <h2>Main User</h2>
          <UserCard key={this.state.userData.login} user={this.state.userData} />
          
          <h2>Followers</h2>
          {this.state.followersData.map(item => <UserCard key={item.login} user={item}/> )}
          <h2>Following</h2>
          {this.state.followingData.map(item => <UserCard key={item.login} user={item}/> )}
        </section>
      </div>
    );
  }
}

export default App;
