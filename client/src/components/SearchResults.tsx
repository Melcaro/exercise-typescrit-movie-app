import React from 'react';
import * as Types from '../../../commons/Types';
import { Link } from 'react-router-dom';

export const SearchResults: React.FC<Types.ISearchResultsProps> = ({
  searchResult,
  onClick,
}) => {
  return (
    <div>
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
          <Link
            to={
              media_type === 'movie' || media_type === 'tv'
                ? `/movie/${id}`
                : `/actor/${id}`
            }
          >
            <div key={id}>
              <div>
                <img
                  onClick={onClick}
                  src={
                    media_type === 'movie' || media_type === 'tv'
                      ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` ||
                        `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt="pic"
                />
              </div>
              <div>{name ? name : title}</div>
            </div>
          </Link>
        )
      )}
    </div>
  );
};
