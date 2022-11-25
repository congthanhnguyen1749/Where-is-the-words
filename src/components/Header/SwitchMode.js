import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import styles from "./SwitchStyles.module.scss";
import "../../App.css";
import { ThemeContext } from "../ThemeContext/themeContext.js";
import { useRef, useState, useEffect, useContext } from "react";
export const SwitchMode = () => {
  const themeContext = useContext(ThemeContext);
  const refInput = useRef();
  const refCircle = useRef();
  const refToggle = useRef();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    refInput.current.checked = isDark;
  }, [isDark]);
  useEffect(() => {
    const changeBackgroundButton = () => {
      if (isDark) {
        refCircle.current.style.background = "#222";
        refToggle.current.style.background = "#fff";
      } else {
        refCircle.current.style.background = "#fff";
        refToggle.current.style.background = "var(--toggleButtonBackground)";
      }
    };
    changeBackgroundButton();
    document.addEventListener("resize", changeBackgroundButton());
    return () => {
      document.removeEventListener("resize", changeBackgroundButton());
    };
  }, [isDark]);

  const handleToggle = () => {
    refInput.current.checked = !refInput.current.checked;
    setIsDark(refInput.current.checked);
    themeContext.toggleTheme();
  };
  return (
    <div className={styles.ToggleButton} ref={refToggle} onClick={handleToggle}>
      <input type="checkbox" className={styles.Input} ref={refInput} />
      <div className={styles.Icon}>
        {isDark ? <RiMoonFill /> : <BsFillSunFill />}
      </div>
      <div className={styles.Circle} ref={refCircle}></div>
    </div>
  );
};
