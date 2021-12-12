import { PrimaryButton } from "components/UI/Button/Button.styled";
import { Container, Section } from "GlobalStyle";
import styled from "styled-components";

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
`;

export const StyledContainer = styled(Container)`
  position: absolute;
  top: -80px;
`;

export const LinksContainer = styled(Container)`
  flex-direction: column;
  margin-block: -50px 50px;
  gap: 10px;

  @media ${({ theme }) => theme.device.desktop} {
    margin-block: -50px 100px;
  }
`;

export const LinkWrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const OriginalLink = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral.gray};
  padding-block: 10px;

  @media ${({ theme }) => theme.device.desktop} {
    border-bottom: none;
    flex-basis: 70%;
  }
`;

export const ShortLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 10px;

  @media ${({ theme }) => theme.device.desktop} {
    flex-basis: 30%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const ShortLink = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.cyan};
  text-decoration: none;
`;

export const CopyButton = styled(PrimaryButton)`
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;

  &.copied {
    background-color: ${({ theme }) => theme.colors.primary.darkViolet};
  }

  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 0;
    margin-left: 10px;
    width: 20%;
    font-size: 14px;
  }
`;
