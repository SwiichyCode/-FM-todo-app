import styled from "styled-components";

export const TaskItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.25px;
  text-decoration-line: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "initial"};
  color: ${({ isCompleted }) => (isCompleted ? "#D1D2DA" : "#494C6B;")};
  padding: 20px 24px 19px 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e4f1;
  transition: all 200ms ease-in-out;

  @media screen and (max-width: 530px) {
    padding: 16px 20px 16px 20px;
    font-size: 12px;
  }

  .content-li {
    display: flex;
    align-items: center;
  }

  .completed {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: ${({ isCompleted }) =>
      isCompleted ? "initial" : "1px solid #e3e4f1"};

    background: ${({ isCompleted }) =>
      isCompleted
        ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
        : "#fff"};
    border-radius: 50%;
    margin-right: 24px;
    box-sizing: border-box;

    @media screen and (max-width: 530px) {
      width: 20px;
      height: 20px;
    }
  }

  img {
    cursor: pointer;

    @media screen and (max-width: 530px) {
      width: 12px;
      heigth: 12px;
    }
  }
`;
