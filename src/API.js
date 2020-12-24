import axios from "axios";

export const getRepositories = (page) => {
  const GITHUB_LINK =
    "https://api.github.com/search/repositories?q=created:>2020-11-24&sort=stars&order=desc";

  const Promise = axios({
    method: "GET",
    url: GITHUB_LINK,
    params: { page: page },
  });

  return Promise;
};
