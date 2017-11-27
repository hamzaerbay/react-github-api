import React, { Component } from 'react';

import ErrorMessage from './ErrorMessage';
import GithubCardLoader from './GithubCardLoader';
import GithubFollowers from './GithubFollowers';
import SearchForm from './SearchForm';

class GithubCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userFollowerData: [],
      name: 'hamzaerbay',
      error: null,
      isLoading: false,
      isLoadingFollowers: false,
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
      isLoadingFollowers: true,
      userData: [],
      userFollowerData: [],
    });
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    this.fetchUser(this.state.name);
    this.fetchFollower(this.state.name);
    e.preventDefault();
  }

  fetchUser(username) {
    this.loadingProgress();
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return `${response.status} something went wrong...`;
        // throw new Error(response.status);
      })
      .then(userData => this.setState({ userData, isLoading: false }))
      .catch((error) => {
        this.setState({ error, isLoading: true });
        console.log('hata', error);
      });
  }

  fetchFollower(username) {
    fetch(`https://api.github.com/users/${username}/followers`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        // return `${response.status} something went wrong...`;
        throw new Error(response.status);
      })
      .then((userFollowerData) => {
        this.setState({ userFollowerData, isLoadingFollowers: false });
      })
      .catch((err) => {
        this.setState({ isLoadingFollowers: true });
        console.log(err);
      });
  }

  render() {
    const { userData, userFollowerData, isLoading, isLoadingFollowers, error } = this.state;
    return (
      <div>
        {error ?
          <ErrorMessage errorMessage={ error } /> : null
        }
        <SearchForm handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
        {isLoading ?
          <GithubCardLoader Type />
          :
          <div className="gh-box">
            <div className="gh-box__avatar">
              {userData.avatar_url ?
                <img src={ userData.avatar_url } alt={ `${userData.name} ${userData.id}` } width="80" height="80" />
                : null }
            </div>
            <h3>{ userData.name }</h3>
            <p>{ userData.location }</p>
            { userData.bio ? <p className="gh-box__bio">{ userData.bio }</p> : null }
            <ul className="gh-box__meta">
              <li>
                <i className="fa fa-users" aria-hidden="true" />{ userData.followers }
              </li>
              <li>
                <i className="fa fa-user-plus" aria-hidden="true" />{ userData.following }
              </li>
              <li>
                <i className="fa fa-code-fork" aria-hidden="true" />{ userData.public_repos }
              </li>
            </ul>
          </div>}
        <GithubFollowers
          isLoading={ isLoadingFollowers }
          followers={ userFollowerData }
          followerCount={ userData.followers }
        />
      </div>
    );
  }
}

export default GithubCard;
