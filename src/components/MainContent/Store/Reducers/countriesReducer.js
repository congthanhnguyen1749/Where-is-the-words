import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_BY_REGION,
  GET_COUNTRIES_BY_NAME,
  SET_LOADING,
} from "../types";
const CountriesReducerInitialState = {
  countries: [],
  country: null,
  loading: true,
};

const CountriesReducer = (state = CountriesReducerInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload };
    case GET_COUNTRY_BY_NAME:
      //payload nhan du lieu tu countrydeteal/index.js
      return { ...state, country: payload };
    case GET_COUNTRY_BY_REGION:
      //payload nhan du lieu tu countrydeteal/index.js
      return { ...state, countries: payload };
    // buoc 3
    case GET_COUNTRIES_BY_NAME:
      //payload nhan du lieu tu countrydeteal/index.js
      return { ...state, countries: payload };
    case SET_LOADING:
      //payload nhan du lieu tu countrydeteal/index.js
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default CountriesReducer;
