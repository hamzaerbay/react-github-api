import React, { Component } from 'react';
import GithubFollowers from './Github-followers';

class GithubCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userFollowerData: [],
      name: 'hamzaerbay',
      error: null,
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchUser(this.state.name);
    this.fetchFollower(this.state.name);
  }

  loadingProgress() {
    this.setState({
      isLoading: true,
      userData: [],
      userFollowerData: [],
    });
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
    this.loadingProgress();
    fetch(`https://api.github.com/users/${username}`)
      // .then(response => response.json())
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return `${response.status} something went wrong...`;
        // console.log(response.statusText, 'Something went wrong ...');
        // throw new Error('Something went wrong ...');
      })
      .then(userData => this.setState({ userData, isLoading: false }))
      .catch((error) => {
        this.setState({ error, isLoading: false });
        console.log('test', error);
      });
  }

  fetchFollower(username) {
    fetch(`https://api.github.com/users/${username}/followers`)
      .then(response => response.json())
      .then((userFollowerData) => {
        this.setState({ userFollowerData });
      })
      .catch((err) => {
        console.log('test', err.type);
      });
  }

  render() {
    const { userData, userFollowerData, isLoading } = this.state;
    return (
      <div className={isLoading ? 'is-loading' : null}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="gh-box__input" onChange={this.handleChange} />
          <input type="submit" className="gh-box__btn" value="search" />
        </form>
        <div className="gh-box">
          <div className="gh-box__avatar">
            <img src={userData.avatar_url} alt={`${userData.name} ${userData.id}`} width="80" height="80" />
          </div>
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
