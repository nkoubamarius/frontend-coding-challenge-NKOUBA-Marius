import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const RepositoryContainer = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const RepositoryInfo = styled.div`
  margin-left: 10px;
`;
export const RepositoryH2 = styled.h2``;
export const RepositoryP = styled.p``;
export const RepositoryInfoBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarItem = styled(Avatar)`
  height: 140px !important;
  width: 140px !important;
  border: 2px solid white;
`;

export const SubmittedItem = styled.p``;
