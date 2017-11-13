import React, { Component } from 'react';
import GithubFollowers from './Github-followers';

class GithubCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userFollowerData: [],
      name: 'hamzaerbay',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.fetchUser(this.state.name);
    this.fetchFollower(this.state.name);
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(e) {
    this.fetchUser(this.state.name);
    this.fetchFollower(this.state.name);
    e.preventDefault();
  }

  fetchUser(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(userData => this.setState({ userData }))
      .catch((err) => {
        console.log(err);
      });
  }

  fetchFollower(username) {
    fetch(`https://api.github.com/users/${username}/followers`)
      .then(response => response.json())
      .then((userFollowerData) => {
        this.setState({ userFollowerData });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { userData, userFollowerData } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="gh-box__input" onChange={this.handleChange} />
          <input type="submit" className="gh-box__btn" value="search" />
        </form>
        <div className="gh-box">
          <img className="gh-box__avatar" src={userData.avatar_url} alt={`${userData.name} ${userData.id}`} />
          <h3>{userData.name}</h3>
          <p>{userData.location}</p>
          {userData.bio ? <p className="gh-box__bio">{userData.bio}</p> : null}
          <ul className="gh-box__meta">
            <li><i className="fa fa-users" aria-hidden="true" /> {userData.followers}</li>
            <li><i className="fa fa-user-plus" aria-hidden="true" /> {userData.following}</li>
            <li><i className="fa fa-code-fork" aria-hidden="true" /> {userData.public_repos}</li>
          </ul>
        </div>
        <GithubFollowers followers={userFollowerData} />
      </div>
    );
  }
}

export default GithubCard;
