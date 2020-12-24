import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const RepositoryContainer = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 10px;
  overflow: hidden;
  transition: all 0.25s ease-in-out;

  @media only screen and (max-width: 950px) {
    width: 98%;
  }

  :hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 2rem 5rem 0 rgba(0, 0, 0, 0.1);
  }
`;

export const RepositoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;
export const RepositoryH2 = styled.h2``;
export const RepositoryP = styled.p``;
export const RepositoryInfoBottom = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarItem = styled(Avatar)`
  height: 140px !important;
  width: 140px !important;
  border: 2px solid white;
`;

export const SubmittedItem = styled.p``;
