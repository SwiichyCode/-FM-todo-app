import styled from "styled-components";

export const TaskListWrapper = styled.ul`
  width: 100%;
  max-width: 540px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.component};
  box-shadow: ${({ theme }) => theme.colors.bsList};
  border-radius: 5px;
`;
