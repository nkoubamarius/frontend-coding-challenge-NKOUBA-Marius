import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  z-index: 5;
  width: 100%;
  border-bottom: 0.1px solid lightgray;
`;

export const NavbarLogo = styled.img`
  cursor: pointer;
  object-fit: contain;
  height: 60px;
`;
