import React, { useEffect, useState } from "react";
import Repository from "../Repository";
import { BodyContainer } from "./BodyElements";
import axios from "axios";

const Body = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const GITHUB_LINK =
    "https://api.github.com/search/repositories?q=created:>2020-11-24&sort=stars&order=desc";
  useEffect(() => {
    axios
      .get(GITHUB_LINK)
      .then(function (response) {
        setRepositories(response.data.items);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <BodyContainer>
      {repositories.map((repository) => (
        <Repository key={repository.node_id} repository={repository} />
      ))}
    </BodyContainer>
  );
};

export default Body;
