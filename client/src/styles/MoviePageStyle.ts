import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  width: 90vw;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  position: relative;
`;

export const ImgContainer = styled.div`
  flex: 0 0 20%;
  margin-left: 3%;
`;

export const MovieImg = styled.img`
  width: 100%;
  border-radius: 5%;
`;

export const MovieInfos = styled.div`
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 3%;
`;

export const MovieTitle = styled.h1`
  flex: 0 0 10%;
`;

export const MovieDescription = styled.p`
  flex: 0 0 30%;
  text-align: left;
  font-size: 1.5em;
`;

export const MovieRelease = styled.p`
  flex: 0 0 10%;
  font-size: 1.3em;
`;

export const CastInfos = styled.div`
  flex: 0 0 100%;
  margin-left: 3%;
`;

export const CastTitle = styled.h2`
  font-size: 2em;
`;
export const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 3%;
  width:100%;
`;

export const ActorContainer = styled(Link)`
  flex: 0 0 13%;
  border: 1px solid grey;
  box-shadow: 1px 1px grey;
  border-radius: 5%;
  margin: 1%;
  text-decoration: none;
  color: black;
`;

export const ActorImgContainer = styled.div`
  height: 35vh;
  width: 100%;
  overflow: hidden;
`;
export const ActorImg = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
  border-radius: 5% 5% 0 0;
`;

export const ActorRole = styled.div`
  flex: 0 0 20%;
`;

export const ActorName = styled.p`
  text-align: center;
  font-size: 1.3em;
  font-weight: bold;
`;

export const CharacterName = styled.p`
  text-align: center;
  font-size: 1.3em;
  font-style: italic;
`;
