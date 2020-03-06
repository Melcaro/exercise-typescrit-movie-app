import React from 'react';

import { HeaderContainer, HeaderTitle } from '../styles/HomePageStyle';

export const Header: React.FC = () => {
  return (
    <HeaderContainer to="/">
      <HeaderTitle>MOVIE APP with TYPESCRIPT</HeaderTitle>
    </HeaderContainer>
  );
};
