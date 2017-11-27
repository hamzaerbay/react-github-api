import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader, { Rect, Circle } from 'react-content-loader';

const GithubCardLoader = (props) => {
  const Type = props.Type;
  const CardLoader = () => (
    <div>
      <div className="gh-box">
        <div className="gh-box__avatar">
          <ContentLoader height={ 80 } width={ 80 } speed={ 1 } primaryColor={ '#EDEEF0' } secondaryColor={ '#F4F8FA' }>
            <Circle x={ 40 } y={ 40 } radius={ 40 } />
          </ContentLoader>
        </div>
        <ContentLoader height={ 45 } width={ 350 } speed={ 1 } primaryColor={ '#EDEEF0' } secondaryColor={ '#F4F8FA' }>
          <Rect x={ 0 } y={ 0 } height={ 20 } radius={ 4 } width={ 350 } />
          <Rect x={ 25 } y={ 30 } height={ 15 } radius={ 4 } width={ 300 } />
        </ContentLoader>
        <ul className="gh-box__meta">
          <li>
            <ContentLoader height={ 16 } width={ 30 } speed={ 1 } primaryColor={ '#EDEEF0' } secondaryColor={ '#F4F8FA' }>
              <Rect x={ 0 } y={ 0 } height={ 16 } radius={ 4 } width={ 30 } />
            </ContentLoader>
          </li>
          <li>
            <ContentLoader height={ 16 } width={ 30 } speed={ 1 } primaryColor={ '#EDEEF0' } secondaryColor={ '#F4F8FA' }>
              <Rect x={ 0 } y={ 0 } height={ 16 } radius={ 4 } width={ 30 } />
            </ContentLoader>
          </li>
          <li>
            <ContentLoader height={ 16 } width={ 30 } speed={ 1 } primaryColor={ '#EDEEF0' } secondaryColor={ '#F4F8FA' }>
              <Rect x={ 0 } y={ 0 } height={ 16 } radius={ 4 } width={ 30 } />
            </ContentLoader>
          </li>
        </ul>
      </div>
    </div>
  );
  const FollowerLoader = () => (
    <ContentLoader height={ 48 } width={ 348 } speed={ 1 } primaryColor={ '#EDEEF0' } secondaryColor={ '#F4F8FA' }>
      <Rect x={ 0 } y={ 0 } height={ 48 } radius={ 4 } width={ 48 } />
      <Rect x={ 60 } y={ 0 } height={ 48 } radius={ 4 } width={ 48 } />
      <Rect x={ 120 } y={ 0 } height={ 48 } radius={ 4 } width={ 48 } />
      <Rect x={ 180 } y={ 0 } height={ 48 } radius={ 4 } width={ 48 } />
      <Rect x={ 240 } y={ 0 } height={ 48 } radius={ 4 } width={ 48 } />
      <Rect x={ 300 } y={ 0 } height={ 48 } radius={ 4 } width={ 48 } />
    </ContentLoader>
  );

  if (Type) {
    return <CardLoader />;
  }
  return <FollowerLoader />;
};
GithubCardLoader.propTypes = {
  Type: PropTypes.bool.isRequired,
};
GithubCardLoader.defaultProps = {
  Type: false,
};

export default GithubCardLoader;
