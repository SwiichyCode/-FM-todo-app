import styled from "styled-components";
import BgApp from "../../assets/bg-desktop-dark.jpg";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 530px) {
    height: auto;
  }
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
  padding: 0 24px 0 26px;

  .dnd-message {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.194444px;
    color: #9495a5;
    margin-top: 49px;

    @media screen and (max-width: 530px) {
      margin-top: 104px;
    }
  }
`;
