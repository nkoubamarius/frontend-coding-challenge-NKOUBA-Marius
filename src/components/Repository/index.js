import { Avatar } from "@material-ui/core";
import React from "react";
import Option from "../Option";
import {
  RepositoryContainer,
  RepositoryH2,
  RepositoryInfo,
  RepositoryInfoBottom,
  RepositoryP,
} from "./RepositoryElements";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
const Repository = () => {
  return (
    <RepositoryContainer>
      <Avatar />
      <RepositoryInfo>
        <RepositoryH2>nkouba</RepositoryH2>
        <RepositoryP>description</RepositoryP>
        <RepositoryInfoBottom>
          <Option
            Icon={StarBorderIcon}
            title="Stars"
            number="100"
            color="green"
          />
          <Option
            Icon={InfoOutlinedIcon}
            title="Issues"
            number="100"
            color="red"
          />
        </RepositoryInfoBottom>
      </RepositoryInfo>
    </RepositoryContainer>
  );
};

export default Repository;
