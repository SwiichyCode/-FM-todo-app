import styled from "styled-components";

export const TaskFooterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  color: #9495a5;
  padding: 20px 24px 19px 24px;
  box-sizing: border-box;
  font-size: 14px;
  letter-spacing: -0.194444px;

  @media screen and (max-width: 530px) {
    font-size: 12px;
    letter-spacing: -0.166667px;
  }

  button {
    font-size: 14px;
    letter-spacing: -0.194444px;
    font-weight: 700;
    line-height: 14px;
    color: #9495a5;
    border: none;
    background: transparent;
    cursor: pointer;

    @media screen and (max-width: 530px) {
      font-size: 12px;
      letter-spacing: -0.166667px;
    }

    &:hover {
      color: #494c6b;
    }
  }
`;
