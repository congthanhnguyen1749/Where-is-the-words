import React from "react";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
import { useContext, useRef, useState, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext/themeContext";
import { Options } from "./Options";
import { useParams } from "react-router-dom";

export const Filter = () => {
  const themeContext = useContext(ThemeContext);
  const refSelect = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);
  //  useParams lấy giá trị regionName từ app.js
  const { regionName } = useParams();
  const [valueOption, setValueOption] = useState("All");
  useEffect(() => {
    if (regionName) setValueOption(regionName);
    else setValueOption("All");
  }, [regionName]);

  const handleOptions = (e) => {
    if (refSelect.current)
      setIsShowOptions(refSelect.current.contains(e.target));
  };

  useEffect(() => {
    if (isShowOptions) {
      document.addEventListener("click", handleOptions);
    }
    return () => {
      document.removeEventListener("click", handleOptions);
    };
  }, [isShowOptions]);

  return (
    <FilterPane>
      <h3>Filter by regions : </h3>
      <SelectPane>
        <Select
          className={themeContext.theme}
          ref={refSelect}
          onClick={handleOptions}
        >
          <span>{valueOption}</span>
          <FaChevronDown />
        </Select>
        <Options isShowOptions={isShowOptions} />
      </SelectPane>
    </FilterPane>
  );
};

const FilterPane = styled.div`
  max-width: 160px;
  width: 100%;
  margin-top: 20px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    text-shadow: var(--TextShadow);
  }
`;
const SelectPane = styled.div`
width:100%
margin-top:8px;
margin-top: 5px;
`;

const Select = styled.div`
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  border-radius: 4px;
  user-select: none;

  span {
    font-size: 18px;
    font-weight: 600;
  }
`;
