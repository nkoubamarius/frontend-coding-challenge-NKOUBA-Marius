import React, { useEffect, useState } from "react";
import Repository from "../Repository";
import { BodyContainer } from "./BodyElements";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRepositories } from "../../API";

const Body = () => {
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadRepositories = () => {
      getRepositories(page)
        .then((response) => {
          setRepositories((prev) => {
            return [...prev, ...response.data.items];
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    loadRepositories();
  }, [page]);

  return (
    <BodyContainer>
      <InfiniteScroll
        dataLength={repositories.length} //This is important field to render the next data
        next={() => setPage((page) => page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {repositories.map((repository) => (
          <Repository key={repository.node_id} repository={repository} />
        ))}
      </InfiniteScroll>
    </BodyContainer>
  );
};

export default Body;
