import React, { Component } from 'react';
import * as Types from '../../../commons/Types';
import { searchForContent } from '../services/fetchDataServices';

import { SearchResults } from './SearchResults';

import { SearchBarContainer, InputSearch } from '../styles/SearchBarStyle';

export class SearchBar extends Component<
  Types.ISearchBarProps,
  Types.ISearchBarState
> {
  state: Types.ISearchBarState = {
    userQuery: '',
    searchResult: [],
  };

  onChange = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>) => {
    if (value) {
      this.setState({
        userQuery: value,
      });
      this.startSearch();
    } else if (value === '') {
      this.clearSearchBar();
    }
  };

  startSearch = async () => {
    const { userQuery } = this.state;
    const searchResult = await searchForContent(userQuery);
    this.setState({ searchResult });
  };

  clearSearchBar = () => {
    this.setState({ userQuery: '', searchResult: [] });
  };
  render() {
    const { searchResult } = this.state;
    return (
      <SearchBarContainer>
        <InputSearch
          onChange={this.onChange}
          value={this.state.userQuery}
          placeholder="Search"
        />
        {SearchResults && (
          <SearchResults
            searchResult={searchResult}
            onClick={this.clearSearchBar}
          />
        )}
      </SearchBarContainer>
    );
  }
}
