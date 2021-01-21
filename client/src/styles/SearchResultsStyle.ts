import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultsContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  flex-wrap: wrap;
  position: absolute;
  margin: 2% auto;
  right: 15%;
`;

export const Result = styled(Link)`
  flex: 0 0 20%;
  margin: 2%;
  text-decoration: none;
  border: 1px solid grey;
  box-shadow: 1px 1px grey;
  border-radius: 5%;
`;

export const ResultImgContainer = styled.div`
  height: 20vh;
  width: 100%;
  overflow: hidden;
`;

export const ResultImg = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
  border-radius: 5% 5% 0 0;
`;

export const ResultTitle = styled.div`
  height:6vh;
  font-style: none;
  color: black;
  font-size: 1.1em;
  padding-top:5%;
`;
