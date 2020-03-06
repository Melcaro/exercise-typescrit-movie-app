import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContainer = styled.div`
  width: 99vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const HeaderContainer = styled(Link)`
  flex: 0 0 10%;
  width: 100%;
  text-decoration: none;
  margin-top: 2%;
`;

export const HeaderTitle = styled.h1`
  font-size: 2em;
  color: black;
`;
