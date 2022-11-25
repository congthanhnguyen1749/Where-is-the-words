import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Country } from "./Country";
import {
  getCountries,
  getCountriesByName,
  getCountriesByRegion,
} from "../Store/Action/countriesAction";
import ScrollBar from "react-perfect-scrollbar";
import { useParams } from "react-router-dom";
import { Loading } from "../../loading/loading";

export const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.Countries.countries);
  // nhan du lieu truc tiep tu reducer
  const loading = useSelector((state) => state.Countries.loading);
  // lấy ra tên được truyền vào từ các miền trên thanh tìm kiếm https
  const slug = useParams();

  useEffect(() => {
    if (slug.regionName) dispatch(getCountriesByRegion(slug.regionName));
    else if (slug.name) dispatch(getCountriesByName(slug.name));
    else dispatch(getCountries());
  }, [dispatch, slug.regionName, slug.name]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ScrollBar style={{ maxHeight: "70vh", overflow: "hidden" }}>
          <CountriesContainer>
            {countries.map((country, index) => (
              <Country country={country} key={index} />
            ))}
          </CountriesContainer>
        </ScrollBar>
      )}
    </>
  );
};

const CountriesContainer = styled.div`
  width: 100%;

  display: grid;
  /* chia tỷ lệ các items trên màn hình máy tính */
  grid-template-columns: repeat(4, 1fr);
  /* gap khoảng cách giữa các items */
  gap: 12px;
  padding: 4px 1px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    overflow: auto;

    gap: 10px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    overflow: auto;

    gap: 8px;
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, auto);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;

    align-items: center;
  } ;
`;
