import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext/themeContext";
import styles from "../CountryDetail/CountryInfoStyle.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const getLanguage = function (country) {
  let result = "";
  country.languages.forEach((language) => {
    if (result !== " ") result = result + "-" + language.name;
    else {
      result += language.name;
    }
  });
  return result;
};

const getCountryNameByCode = async (code) => {
  const result = await axios.get(
    `https://restcountries.com/v3.1/alpha?codes=${code}`
  );
  return result.data;
};

export const CountyInfo = (props) => {
  const themeContext = useContext(ThemeContext);
  const country = useSelector((state) => state.Countries.country);
  const [countryBorders, setCountryBorders] = useState([]);

  useEffect(() => {
    if (country && country.borders) {
      getCountryNameByCode(country.borders)
        .then((res) => {
          const countryName = res.map((country) => country.name);
          setCountryBorders(countryName);
        })
        .catch((err) => console.log(err));
    }
  }, [country]);

  return (
    <div className={styles.countryInfo}>
      {country && (
        <>
          <h3 className={styles.countryName}>{country.name}</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.countryinfo__title}>Native Name</td>
                <td>:</td>
                <td className={styles.countryinfo__value}>
                  {country.nativeName}
                </td>
              </tr>
              <tr>
                <td className={styles.countryinfo__title}>Official</td>
                <td>:</td>
                <td className={styles.countryinfo__value}>
                  {country.altSpellings}
                </td>
              </tr>
              <tr>
                <td className={styles.countryinfo__title}>Population</td>
                <td>:</td>
                <td className={styles.countryinfo__value}>
                  {new Intl.NumberFormat().format(country.population)}
                </td>
              </tr>
              <tr>
                <td className={styles.countryinfo__title}>Region</td>
                <td>:</td>
                <td className={styles.countryinfo__value}>{country.region}</td>
              </tr>
              <tr>
                <td className={styles.countryinfo__title}>Sub Region</td>
                <td>:</td>
                <td className={styles.countryinfo__value}>
                  {country.subregion}
                </td>
              </tr>
              <tr>
                <td className={styles.countryinfo__title}>Capital</td>
                <td>:</td>
                <td className={styles.countryinfo__value}>{country.capital}</td>
              </tr>
              <tr>
                <td className={styles.countryinfo__title}>Top Level Domain</td>
                <td>:</td>
                <td className={styles.countryinfo__value}>
                  {country.topLevelDomain}
                </td>
              </tr>
              <tr>
                <td className={styles.countryinfo__title}>Currencies</td>
                <td>:</td>
                <td className={styles.countryinfo__value}>
                  {`${country.currencies[0].code} - ${country.currencies[0].name}`}
                </td>
              </tr>
              <tr>
                <td className={styles.countryinfo__title}>Languages</td>
                <td>:</td>
                <td className={styles.countryinfo__value}>
                  {getLanguage(country)}
                </td>
              </tr>
              <tr>
                <td className={styles.countryinfo__title}>Border Countries</td>
                <td>:</td>
                <td className={styles.countryinfo__value}>
                  {countryBorders.length > 0 &&
                    countryBorders.map((country, index) => (
                      <Link to={`/country/${country.common}`} key={index}>
                        <div
                          className={clsx(
                            styles.borderItem,
                            themeContext.theme
                          )}
                        >
                          {country.common}
                        </div>
                      </Link>
                    ))}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
