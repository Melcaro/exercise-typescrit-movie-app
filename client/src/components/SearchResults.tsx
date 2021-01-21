import React from 'react';
import * as Types from '../../../commons/Types';

import {
  ResultsContainer,
  Result,
  ResultImgContainer,
  ResultImg,
  ResultTitle,
} from '../styles/SearchResultsStyle';

export const SearchResults: React.FC<Types.ISearchResultsProps> = ({
  searchResult,
  onClick,
}) => {
  return (
    <ResultsContainer>
      {searchResult.map(
        ({
          name,
          poster_path,
          backdrop_path,
          id,
          title,
          profile_path,
          media_type,
        }) => (
          <Result
            to={
              media_type === 'movie' || media_type === 'tv'
                ? `/movie/${id}`
                : `/actor/${id}`
            }
            key={id}
          >
            <ResultImgContainer>
              <ResultImg
                onClick={onClick}
                src={
                  backdrop_path || poster_path || profile_path
                    ? media_type === 'movie' || media_type === 'tv'
                      ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` ||
                        `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80'
                }
                alt="result picture"
                
              />
            </ResultImgContainer>
            <ResultTitle>{name ? name : title}</ResultTitle>
          </Result>
        )
      )}
    </ResultsContainer>
  );
};
