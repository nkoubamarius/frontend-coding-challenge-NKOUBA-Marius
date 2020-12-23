import React, { useEffect, useState } from "react";
import Repository from "../Repository";
import { BodyContainer } from "./BodyElements";
import axios from "axios";

const Body = () => {
  const [repositories, setRepositories] = useState([]);
  const GITHUB_LINK =
    "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc";
  useEffect(() => {
    axios
      .get(GITHUB_LINK)
      .then(function (response) {
        setRepositories(response.data.items);
        console.log(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <BodyContainer>
      {repositories.map((repository) => (
        <Repository key={repository.node_id} data={repository} />
      ))}
    </BodyContainer>
  );
};

export default Body;
