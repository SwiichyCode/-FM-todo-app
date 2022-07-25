import styled from "styled-components";

export const TaskFooterWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.footerList};
  padding: 20px 24px 19px 24px;
  box-sizing: border-box;
  font-size: 14px;
  letter-spacing: -0.194444px;
  background: #25273d;
  border-top: ${({ theme }) => `1px solid ${theme.colors.borderList}`};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  @media screen and (max-width: 530px) {
    font-size: 12px;
    letter-spacing: -0.166667px;
  }

  button {
    font-size: 14px;
    letter-spacing: -0.194444px;
    font-weight: 700;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.footerList};
    border: none;
    background: transparent;
    cursor: pointer;

    @media screen and (max-width: 530px) {
      font-size: 12px;
      letter-spacing: -0.166667px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.footerListHover};
    }
  }
`;
