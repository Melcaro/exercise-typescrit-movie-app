import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ActorPageContainer = styled.div`
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

export const ActorImg = styled.img`
  width: 100%;
  border-radius: 5%;
`;

export const ActorInfos = styled.div`
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 3%;
`;

export const ActorName = styled.h1`
  flex: 0 0 10%;
`;

export const ActorBiography = styled.p`
  flex: 0 0 30%;
  text-align: left;
  font-size: 1.5em;
`;

export const Filmography = styled.div`
  flex: 0 0 100%;
  margin-left: 3%;
  width: 100%;
`;

export const FilmoTitle = styled.h2`
  font-size: 2em;
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const MovieContainer = styled(Link)`
  flex: 1 0 20%;
  border: 1px solid grey;
  box-shadow: 1px 1px grey;
  border-radius: 5%;
  margin: 1%;
  text-decoration: none;
  color: black;
`;

export const MovieImgContainer = styled.div`
  height: 20vh;
  width: 100%;
  overflow: hidden;
`;
export const MovieImg = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
  border-radius: 5% 5% 0 0;
`;

export const ActorRole = styled.div`
  text-align: center;
  font-size: 1.3em;
`;

export const MovieTitle = styled.p`
  font-weight: bold;
`;

export const CharacterName = styled.p`
  font-style: italic;
`;
