import React, { useContext } from "react";
import { TodoHeaderWrapper } from "./TodoHeader.style";

import IconMoon from "../../../assets/icon-moon.svg";
import IconSun from "../../../assets/icon-sun.svg";

import { ThemePreferenceContext } from "../../App/App";

export default function TodoHeader() {
  const { currentTheme, setCurrentTheme } = useContext(ThemePreferenceContext);

  const handleTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };

  return (
    <TodoHeaderWrapper>
      <h1>todo</h1>
      {currentTheme === "light" ? (
        <img onClick={handleTheme} src={IconMoon} alt="theme-changer" />
      ) : (
        <img onClick={handleTheme} src={IconSun} alt="theme-changer" />
      )}
    </TodoHeaderWrapper>
  );
}
