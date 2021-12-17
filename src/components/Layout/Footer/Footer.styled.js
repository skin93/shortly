import { Container } from "GlobalStyle";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding-block: 60px;
  background-color: ${({ theme }) => theme.colors.neutral.veryDarkViolet};
`;

export const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;

  @media ${({ theme }) => theme.device.desktop} {
    grid-template-columns: 35% 65%;
  }
`;

export const FooterHeading = styled.h3`
  color: #fff;
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 10px;

  @media ${({ theme }) => theme.device.desktop} {
    text-align: left;
    font-size: 3rem;
    margin-bottom: 0;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${({ theme }) => theme.device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${({ theme }) => theme.device.desktop} {
    text-align: left;
  }
`;

export const FoooterLinkTitle = styled.h4`
  color: #fff;
  margin-top: 50px;

  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 0;
  }
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.gray};
  margin-block: 10px;
  cursor: pointer;

  &:first-of-type {
    margin-top: 30px;
  }
`;

export const FooterMediaWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;

  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 0;
  }
`;

export const FooterMediaLink = styled.a`
  cursor: pointer;
`;

export const Icon = styled.img``;
