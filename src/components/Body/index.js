import React, { useEffect, useState } from "react";
import Repository from "../Repository";
import { BodyContainer, Loading } from "./BodyElements";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRepositories } from "../../API";

const Body = () => {
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Define loadRepositories function
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

    //Execution of the function loadRepositories
    loadRepositories();
  }, [page]);

  return (
    <BodyContainer>
      <InfiniteScroll
        dataLength={repositories.length} //This is important field to render the next data
        next={() => setPage((page) => page + 1)}
        hasMore={true}
        loader={
          <Loading src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" />
        }
      >
        {repositories.map((repository) => (
          <Repository key={repository.node_id} repository={repository} />
        ))}
      </InfiniteScroll>
    </BodyContainer>
  );
};

export default Body;
