import styled from "styled-components";

export const PaginationNav = styled.nav``;

export const PaginationUl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationLi = styled.li`
  border: 4px solid gray;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 50px;
  cursor: pointer;
  list-style: none;
  margin: 0 10px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;

  :hover {
    background-color: gray;
  }
`;

export const PaginationA = styled.a`
  text-decoration: none;
  color: black;

  :hover {
    color: white;
  }
`;
