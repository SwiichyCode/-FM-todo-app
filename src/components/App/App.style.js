import styled from "styled-components";
import BgApp from "../../assets/bg-desktop-dark.jpg";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  background-image: url(${BgApp});
  background-repeat: no-repeat;
  background-position: top center;
  background-color: #fff;
`;
