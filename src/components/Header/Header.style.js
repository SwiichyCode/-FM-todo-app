import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 541px;
  width: 100%;
  height: 48px;
  padding-top: 70px;
  padding-bottom: 40px;
  color: #fff;

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 15px;
    text-transform: uppercase;

    @media screen and (max-width: 530px) {
      font-size: 22px;
    }
  }

  img {
    cursor: pointer;

    @media screen and (max-width: 530px) {
      width: 19.32px;
      height: 20px;
    }
  }
`;
