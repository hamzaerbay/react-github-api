import React from 'react';
import PropTypes from 'prop-types';
import GithubCardLoader from './GithubCardLoader';

const GithubFollowers = (props) => {
  const isLoading = props.isLoading;
  const isError = props.isLoading;
  const moreFollowerCount = props.followers.length;
  const followerLimit = 10;

  const getFollowers = props.followers.slice(0, followerLimit).map(follower => (
    <li key={ follower.id }>
      <a
        className="gh-box__follower-url"
        href={ follower.html_url }
        title={ follower.login }
        target="_blank"
      >{follower.key}
        <img src={ follower.avatar_url } alt={ follower.login } />
      </a>
    </li>
  ));
  if (isLoading && isError) {
    return (
      <ul className="gh-box__follower">
        <li>
          <GithubCardLoader />
        </li>
      </ul>
    );
  }

  return (
    <ul className="gh-box__follower">
      {getFollowers}
      { moreFollowerCount > followerLimit ?
        <li className="gh-box__more">+{moreFollowerCount - followerLimit }</li>
        : null
      }
    </ul>
  );
};
GithubFollowers.propTypes = {
  followers: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
};

export default GithubFollowers;
