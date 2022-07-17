import styled from "styled-components";

export const TaskFooterFilterWrapper = styled.div`
  position: initial;
  display: flex;
  align-items: center;
  gap: 19px;

  @media screen and (max-width: 530px) {
    width: 100%;
    justify-content: center;
    height: 48px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -90px;
    background-color: ${({ theme }) => theme.colors.component};
    box-shadow: ${({ theme }) => theme.colors.bsList};
    border-radius: 5px;
  }

  .active {
    color: #3a7cfd;
  }
`;
