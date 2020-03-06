import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesContainer = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3%;
`;

export const MovieContainer = styled(Link)`
  border: 1px solid grey;
  box-shadow: 
  border-radius: 5%;
  flex: 0 0 20%;
  margin: 1%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  flex: 0 0 80%;
`;
export const MovieImg = styled.img`
  width: 100%;
  border-radius: 5% 5% 0 0;
`;

export const MovieTitle = styled.p`
  flex: 0 0 20%;
  text-align: center;
  text-decoration: none;
  font-size: 1.3em;
`;
