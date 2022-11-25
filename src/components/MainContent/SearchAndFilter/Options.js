import styled from "styled-components";
import {
  FaGlobeAmericas,
  FaGlobeAsia,
  FaGlobeEurope,
  FaGlobeAfrica,
} from "react-icons/fa";
import { GiWorld, GiEarthAsiaOceania } from "react-icons/gi";
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext/themeContext";
import { Option } from "./Option";

const RegionsList = [
  { icon: GiWorld, value: "All" },
  { icon: FaGlobeAfrica, value: "Africa" },
  { icon: FaGlobeAmericas, value: "Americas" },
  { icon: FaGlobeAsia, value: "Asia" },
  { icon: FaGlobeEurope, value: "Europe" },
  { icon: GiEarthAsiaOceania, value: "Oceania" },
];
export const Options = ({ isShowOptions }) => {
  const themeContext = useContext(ThemeContext);
  const refOptions = useRef(null);

  useEffect(() => {
    const ShowOptions = () => {
      if (isShowOptions) {
        refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`;
        refOptions.current.style.transform = `scaleY(1)`;
      } else {
        refOptions.current.style.transform = `scaleY(0)`;
        refOptions.current.style.maxHeight = `0`;
      }
    };
    ShowOptions();
    document.addEventListener("resize", ShowOptions);
    return () => {
      document.removeEventListener("resize", ShowOptions);
    };
  }, [isShowOptions]);
  return (
    <OptionPane className={themeContext.theme} ref={refOptions}>
      {RegionsList.map((region, index) => {
        return <Option Region={region} key={index} />;
      })}
    </OptionPane>
  );
};

const OptionPane = styled.ul`
  width: 100%;
  margin-top: 2px;
  border-radius: 4px;
  position: absolute;
  z-index: 10;
`;
