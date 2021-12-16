import styled from "styled-components";
import bgBoostDesk from "assets/bg-boost-desktop.svg";
import bgBoostMobile from "assets/bg-boost-mobile.svg";
import { Container, Section } from "GlobalStyle";
import { PrimaryButton } from "components/UI/Button/Button.styled";

export const StyledSection = styled(Section)`
  padding-block: 0;
  background-image: url(${bgBoostMobile});
  background-color: ${({ theme }) => theme.colors.primary.darkViolet};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 250px;

  @media ${({ theme }) => theme.device.desktop} {
    background-image: url(${bgBoostDesk});
  }
`;

export const StyledContainer = styled(Container)`
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 250px;
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

export const BoostHeader = styled.h3`
  color: #fff;
  font-size: 1.7rem;

  @media ${({ theme }) => theme.device.desktop} {
    font-size: 3rem;
  }
`;

export const BoostButton = styled(PrimaryButton)`
  width: 60%;
  margin-top: 20px;

  @media ${({ theme }) => theme.device.desktop} {
    width: 15%;
  }
`;
