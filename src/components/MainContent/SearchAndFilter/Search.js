import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../../../src/App.css";

export const Search = () => {
  const [valueInput, setValueInput] = useState();
  const navigate = useNavigate();
  // tuy chinh thanh tìm kiếm, nhận dữ liệu từ input và truyền vào navigate trên thanh công cụ tìm kiếm.
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      valueInput === undefined
        ? navigate("/")
        : navigate(`/search/${valueInput}`);
    }
  };
  return (
    <SearchPane>
      <h3>Search Your Country :</h3>
      <SearchElement>
        <input
          placeholder="Input the and enter to search..."
          type="text"
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          onKeyDown={handleKeyDown}
        />
        {/* tuy chinh nút button cạnh thanh tìm kiếm, nhận dữ liệu từ input và truyền vào navigate trên thanh công cụ tìm kiếm. */}
        <Link to={valueInput !== "" ? `/search/${valueInput}` : "/"}>
          <MdSearch className="icon" />
        </Link>
      </SearchElement>
    </SearchPane>
  );
};

const SearchPane = styled.div`
  max-width: 320px;
  width: 100%;
  margin-top: 20px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    text-shadow: var(--TextShadow);
  }
`;

const SearchElement = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  background: #fff;
  box-shadow: var(--BoxShadow);
  border-radius: 4px;
  overflow: hidden;

  input {
    width: 85%;
    border: none;
    outline: none;
    font-size: 18px;
    text-decoration: none;
    margin-left: 10px;
  }
  .icon {
    color:black;
    width: 100%;
    height: 100%;
    background: #aaa !important;
    padding: 12px;
    display: flex;
    text-align: center;
    justify-content:center
    box-shadow: none !important;
    opacity: 75%;
    transition: opacity 0.2s linear;
    &:hover {
      opacity: 1;
    }
  }
  input::placeholder {
    font-size: 17px;
    font-weight: 300;
    margin-left: 20px;
    outline: none;
    text-decoration: none;
  }
`;
