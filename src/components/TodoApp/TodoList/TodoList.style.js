import styled from "styled-components";

export const TodoListWrapper = styled.ul`
  width: 100%;
  max-width: 540px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.component};
  box-shadow: ${({ theme }) => theme.colors.bsList};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
