import React from 'react';
import PropTypes from 'prop-types';

const GithubFollowers = (props) => {
  const getFollowers = props.followers.map(follower => (
    <li key={follower.id}>
      <a
        className="gh-box__follower-url"
        href={follower.html_url}
        title={follower.login}
        target="_blank"
      >
        <img src={follower.avatar_url} alt={follower.login} />
      </a>
    </li>
  ));
  return <ul className="gh-box__follower">{getFollowers}</ul>;
};
GithubFollowers.propTypes = {
  followers: PropTypes.array.isRequired,
};
export default GithubFollowers;
