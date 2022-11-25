import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/themeContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Country = (props) => {
  const { country } = props;
  const themeContext = useContext(ThemeContext);
  return (
    <Link to={`/country/${country.name}`}>
      <CountryCard className={themeContext.theme}>
        <div className="flag">
          <img src={country.flag} alt="" />
        </div>
        <CountryInfo>
          <h3>{country.name}</h3>
          <div>
            Population:
            <span>{country.population}</span>
          </div>
          <div>
            Region:
            <span>{country.region}</span>
          </div>
          <div>
            Capital:
            <span>{country.capital}</span>
          </div>
        </CountryInfo>
      </CountryCard>
    </Link>
  );
};

const CountryCard = styled.div`
  max-width: 320px;
  width: 100%;
  filter: brightness(1);
  border-radius: 4px;
  margin-bottom: 12px;
  user-select: none;
  overflow: hidden;
  .flag {
    width: 100%;
    height: 170px;
    display: block;
    transition: all 0.2s ease-in;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    transition: all 0.2s ease-in;
    filter: brightness(0.9);
  }
  &:hover img {
    transition: all 0.2s ease-in;
    transform: scale(1.1);
  }
`;

const CountryInfo = styled.div`
  padding: 10px 16px;
  h3 {
    margin: 16px 0;
    font-size: 20px;
    font-weight: bold;
    height: 50px;
  }

  div {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin: 4px 0;
    span {
      font-weight: 400;
      margin-left: 5px;
    }
  }
`;
