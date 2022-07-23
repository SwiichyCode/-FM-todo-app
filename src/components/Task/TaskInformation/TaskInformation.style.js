import styled from "styled-components";

export const TaskInformationWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 49px;
  gap: 1em;

  @media screen and (max-width: 530px) {
    margin-top: 104px;
  }

  .information-message {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.194444px;
    color: #9495a5;
  }
`;
