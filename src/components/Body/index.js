import React, { useEffect, useState } from "react";
import Repository from "../Repository";
import { BodyContainer } from "./BodyElements";
import axios from "axios";
import Pagination from "../Pagination";

const Body = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [repositoriesPerPage] = useState(10);
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

  if (loading) {
    return <h2>Loading ....</h2>;
  }

  //Get current posts
  const indexOfLastRepository = currentPage * repositoriesPerPage;
  const indexOfFirstRepository = indexOfLastRepository - repositoriesPerPage;
  const currentRepositories = repositories.slice(
    indexOfFirstRepository,
    indexOfLastRepository
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <BodyContainer>
      <Pagination
        repositoriesPerPage={repositoriesPerPage}
        totalRepositories={repositories.length}
        paginate={paginate}
      />

      {currentRepositories.map((repository) => (
        <Repository key={repository.node_id} repository={repository} />
      ))}

      <Pagination
        repositoriesPerPage={repositoriesPerPage}
        totalRepositories={repositories.length}
        paginate={paginate}
      />
    </BodyContainer>
  );
};

export default Body;
