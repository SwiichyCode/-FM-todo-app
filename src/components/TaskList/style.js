import styled from "styled-components";

export const TaskListWrapper = styled.ul`
  width: 100%;
  max-width: 540px;
  height: auto;
  background: #fff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
`;

export const LiWrapper = styled.li`
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
  }
`;

export const TaskFooter = styled.li`
  display: flex;
  justify-content: space-between;
  color: #9495a5;
  padding: 20px 24px 19px 24px;
  box-sizing: border-box;
`;
