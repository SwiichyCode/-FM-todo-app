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
    background: #fff;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;
  }

  .active {
    color: #3a7cfd;
  }
`;
