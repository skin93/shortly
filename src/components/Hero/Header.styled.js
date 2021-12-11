import { PrimaryButton } from "components/UI/Button/Button.styled";
import styled from "styled-components";

export const ImgWrapper = styled.div`
  width: 500px;
  position: relative;
  margin-inline: auto;
  right: -25px;

  @media ${({ theme }) => theme.device.desktop} {
    order: 2;
    width: 1200px;
    right: -250px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  @media ${({ theme }) => theme.device.desktop} {
    order: 1;
    text-align: left;
    align-items: flex-start;
  }
`;

export const HeroHead = styled.h1`
  font-size: 2rem;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.neutral.veryDarkViolet};

  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 0;
    font-size: 4rem;
  }
`;

export const HeroDesc = styled.p`
  margin-block: 25px 35px;
  color: ${({ theme }) => theme.colors.neutral.gray};
  line-height: 1.5;
  ${({ theme }) => theme.typography.poppins500}

  @media ${({ theme }) => theme.device.desktop} {
    width: 85%;
    margin-top: 0;
  }
`;

export const HeroBtn = styled(PrimaryButton)`
  width: 60%;

  @media ${({ theme }) => theme.device.desktop} {
    width: 30%;
  }
`;
