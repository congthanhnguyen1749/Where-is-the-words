import React from "react";
import styled from "styled-components";
import { useContext, createContext, useRef, useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

export const Option = ({ Region }) => {
  const navigate = useNavigate();
  const handleValueOption = function () {
    if (Region.value != "All") navigate(`/region/${Region.value}`);
    else {
      navigate(`/`);
    }
  };
  return (
    <OptionItem onClick={handleValueOption}>
      <Region.icon />
      <span className="textMargin">{Region.value}</span>
    </OptionItem>
  );
};

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: var(--SelectOptionBackground);
  }

  .textMargin {
    margin-left: 5px;
    color: #111;
    text-decoration: none;
  }
`;
