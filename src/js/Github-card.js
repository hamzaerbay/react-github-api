import React from 'react';

class GithubCard extends React.Component {
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
    const getFollowers = userFollowerData.map(follower => (
      <li key={follower.id}>
        <img src={follower.avatar_url} alt={follower.login} />
      </li>
    ));
    return (
      <div className="gh-box">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="search" />
        </form>
        <img className="gh-box__avatar" src={userData.avatar_url} alt={userData.name} />
        <p>{userData.id}</p>
        <h3>{userData.name}</h3>
        <ul className="gh-box__meta">
          {userData.bio ? <li className="gh-box__bio">{userData.bio}</li> : null}
          <li>Followers: {userData.followers}</li>
          <li>Following: {userData.following}</li>
        </ul>
        <ul className="gh-box__follower">{getFollowers}</ul>
      </div>
    );
  }
}

export default GithubCard;
