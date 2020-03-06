import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, HeaderTitle } from '../styles/HomePageStyle';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderTitle>MOVIE APP with TYPESCRIPT</HeaderTitle>
      </Link>
    </HeaderContainer>
  );
};
