import React from "react";
import { HeaderWrapper } from "./Header.style";

import IconMoon from "../../assets/icon-moon.svg";
import IconSun from "../../assets/icon-sun.svg";

export default function Header({ currentTheme, setCurrentTheme }) {
  const handleTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };

  return (
    <HeaderWrapper>
      <h1>todo</h1>
      {currentTheme === "light" ? (
        <img onClick={handleTheme} src={IconMoon} alt="theme-changer" />
      ) : (
        <img onClick={handleTheme} src={IconSun} alt="theme-changer" />
      )}
    </HeaderWrapper>
  );
}
