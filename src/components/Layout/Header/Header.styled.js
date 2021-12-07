import { Container } from "GlobalStyle";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: transparent;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.device.desktop} {
    justify-content: flex-start;
  }
`;

export const Logo = styled.img``;
