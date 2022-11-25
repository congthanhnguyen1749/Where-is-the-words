import React, { useContext } from "react";
import styled from "styled-components";
import { SwitchMode } from "./SwitchMode";
import { ThemeContext } from "../ThemeContext/themeContext.js";
import { Link } from "react-router-dom";

export const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <HeaderPane className={themeContext.theme}>
      <Link to={`/`}>
        <span>Where is the words ?</span>
      </Link>
      <SwitchMode></SwitchMode>
    </HeaderPane>
  );
};
const HeaderPane = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  z-index: 10;

  span {
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    list-style-type: none;
    color: #111;
  }
`;
