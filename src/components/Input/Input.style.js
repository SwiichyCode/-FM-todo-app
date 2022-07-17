import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  height: 64px;
  background: #fff;
  margin-bottom: 24px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;

  @media screen and (max-width: 530px) {
    height: 48px;
  }

  .form {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .circle {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid #e3e4f1;
      box-sizing: border-box;
      margin-left: 20px;
      margin-right: 24px;

      @media screen and (max-width: 530px) {
        width: 20px;
        height: 20px;
      }
    }

    input {
      width: 100%;
      max-width: 414px;
      height: 24px;
      border: none;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.25px;
      color: #393a4b;
      background: transparent;
      padding: 0;

      @media screen and (max-width: 530px) {
        font-size: 12px;
      }

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #9495a5;
      }
    }
  }
`;
