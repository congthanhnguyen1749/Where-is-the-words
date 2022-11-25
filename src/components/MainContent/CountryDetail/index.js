import styled from "styled-components";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext/themeContext";
import { CountyInfo } from "./CountyInfo";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from "../Store/Action/countriesAction";
import { Loading } from "../../loading/loading";

function CountryDetail(props) {
  const themeContext = useContext(ThemeContext);
  const slug = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.Countries.country);
  // nhan du lieu truc tiep tu reducer
  const loading = useSelector((state) => state.Countries.loading);

  useEffect(() => {
    //day du lieu qua reducer
    dispatch(getCountryByName(slug.countryName));
  }, [slug.countryName, dispatch]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <div
            className={`goback-btn ${themeContext.theme}`}
            onClick={() => navigate(-1)}
          >
            Go back
          </div>
          <CountryContainer>
            <div className="fixImg">
              <img
                // src={country.flag}
                src={
                  country
                    ? country.flag
                    : "https://via.placeholder.com/300x300?text=Image+Error"
                }
                alt=""
                className="flagCountry"
              />
            </div>
            <CountyInfo />
          </CountryContainer>
        </Wrapper>
      )}
    </>
  );
}
export default CountryDetail;

const Wrapper = styled.div`
  padding-top: 20px;
  .goback-btn {
    display: block;
    width: 80px;
    height: 28px;
    line-height: 28px;
    padding: 2px 4px;
    border-radius: 4px;
    text-align:center;
    font-weight: 500;
    filter:brightness(0.9)
    transition:all 0.2s linear;
    &:hover {
    filter:brightness(1);
    font-weight: bold;
    cursor:default;
    user-select:none;

    }
  }
`;
const CountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  .fixImg {
    max-width: 600px;
    height: 47.5vh;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .flagCountry {
    max-width: 600px;
    width: 100%;
    height: 100%;
    margin-bottom: 12px;
    box-shadow: var(--BoxShadow);
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    .fixImg {
      max-width: 600px;
      height: 35vh;
    }
  }
`;
