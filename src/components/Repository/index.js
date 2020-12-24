import React from "react";
import Option from "../Option";
import {
  AvatarItem,
  RepositoryContainer,
  RepositoryH2,
  RepositoryInfo,
  RepositoryInfoBottom,
  RepositoryP,
} from "./RepositoryElements";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
const Repository = ({ repository }) => {
  const {
    id,
    name,
    description,
    owner,
    stargazers_count,
    open_issues,
    created_at,
  } = repository;
  return (
    <RepositoryContainer>
      <AvatarItem src={owner.avatar_url} className="repository__avatar" />
      <RepositoryInfo>
        <RepositoryH2>{name}</RepositoryH2>
        <RepositoryP>{description}</RepositoryP>
        <RepositoryInfoBottom>
          <Option
            Icon={StarBorderIcon}
            title="Stars"
            number={stargazers_count}
            color="green"
          />
          <Option
            Icon={InfoOutlinedIcon}
            title="Issues"
            number={open_issues}
            color="red"
          />
          <Option created_at={created_at} owner={owner.login} color="red" />
        </RepositoryInfoBottom>
      </RepositoryInfo>
    </RepositoryContainer>
  );
};

export default Repository;
