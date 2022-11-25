import React from "react";
import styled from "styled-components";
import { Filter } from "./Filter";
import { Search } from "./Search";
export const SearchAndFilter = () => {
  return (
    <SearchAndFilterPane>
      <Search />
      <Filter />
    </SearchAndFilterPane>
  );
};

const SearchAndFilterPane = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;
