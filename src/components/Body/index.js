import React from "react";
import Repository from "../Repository";
import { BodyContainer } from "./BodyElements";

const Body = () => {
  return (
    <BodyContainer>
      <Repository />
      <Repository />
      <Repository />
    </BodyContainer>
  );
};

export default Body;
