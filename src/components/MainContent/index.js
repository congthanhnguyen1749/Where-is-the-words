import React from "react";
import { SearchAndFilter } from "./SearchAndFilter/index.js";
import { Countries } from "./Countries/index";
import CountryDetail from "./CountryDetail/index";

export const MainContent = () => {
  return (
    <div>
      <SearchAndFilter />
      <Countries />
    </div>
  );
};
