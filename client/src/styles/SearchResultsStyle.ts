import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultsContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: flex-start;
  background-color: white;
  flex-wrap: wrap;
  position: absolute;
  top: 55px;
  right: -185px;
  padding-top: 5%;
`;

export const Result = styled(Link)`
  flex: 0 0 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2%;
  text-decoration: none;
  border: 1px solid brown;
`;

export const ResultImgContainer = styled.div`
  flex: 0 0 60%;
`;

export const ResultImg = styled.img`
  width: 100%;
  border-radius: 5%;
`;

export const ResultTitle = styled.div`
  flex: 0 0 30%;
  font-style: none;
  color: black;
  font-size: 1.2em;
`;
