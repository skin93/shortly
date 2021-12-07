import styled from "styled-components";

export const StyledHamburger = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media ${(props) => props.theme.device.desktop} {
    display: none;
  }
`;

export const Element = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme.colors.neutral.grayIsViolet};
`;
