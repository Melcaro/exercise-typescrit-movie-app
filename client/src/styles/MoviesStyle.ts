import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MoviesContainerTitle = styled.h2`
  width: 100%;
  font-size: 2em;
`;

export const MovieContainer = styled(Link)`
  flex: 0 0 12%;
  border: 1px solid grey;
  box-shadow: 1px 1px grey;
  border-radius: 5%;
  margin: 1%;
  text-decoration: none;
  color: black;
`;

export const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const MovieImg = styled.img`
  width: 100%;
  border-radius: 5% 5% 0 0;
`;

export const MovieTitleContainer = styled.div`
  flex: 0 0 20%;
  text-align: center;
  padding: 5% 1%;
  font-size: 1.3em;
`;

export const MovieTitle = styled.p<{ title: string }>`
  margin: 0;
`;
