import styled from "styled-components";

export const TaskFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #9495a5;
  padding: 20px 24px 19px 24px;
  box-sizing: border-box;

  .task-filter {
    display: flex;
    align-items: center;
    gap: 19px;

    .active {
      color: #3a7cfd;
    }
  }

  button {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.194444px;
    color: #9495a5;
    border: none;
    background: transparent;
    cursor: pointer;

    &:hover {
      color: #494c6b;
    }
  }
`;
