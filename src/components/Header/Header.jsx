import React from "react";
import { HeaderWrapper } from "./Header.style";
import IconTheme from "../../assets/icon-moon.svg";

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>todo</h1>
      <img src={IconTheme} alt="theme-changer" />
    </HeaderWrapper>
  );
}
