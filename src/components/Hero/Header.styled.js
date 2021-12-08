import { PrimaryButton } from "components/UI/Button/Button.styled";
import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  position: relative;
  overflow-x: hidden;
`;

export const ImgWrapper = styled.div`
  width: 500px;
  position: relative;
  right: -10vw;
`;

export const Img = styled.img`
  width: 100%;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const HeroHead = styled.h1`
  font-size: 2rem;
  margin-top: 30px;
`;

export const HeroDesc = styled.p`
  margin-block: 25px 35px;
  color: ${({ theme }) => theme.colors.neutral.gray};
  line-height: 1.5;
  ${({ theme }) => theme.typography.poppins500}
`;

export const HeroBtn = styled(PrimaryButton)`
  width: 60%;
`;
