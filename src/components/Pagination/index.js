import React from "react";
import {
  PaginationNav,
  PaginationUl,
  PaginationLi,
  PaginationA,
} from "./PaginationElements";

const Pagination = ({ repositoriesPerPage, totalRepositories, paginate }) => {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(totalRepositories / repositoriesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <PaginationNav>
      <PaginationUl className="pagination">
        {pageNumbers.map((number) => (
          <PaginationLi
            onClick={() => paginate(number)}
            key={number}
            className="page-item"
          >
            <PaginationA href="!#" className="page-link">
              {number}
            </PaginationA>
          </PaginationLi>
        ))}
      </PaginationUl>
    </PaginationNav>
  );
};

export default Pagination;
