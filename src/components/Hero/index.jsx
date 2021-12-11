import {
  HeroBtn,
  HeroContent,
  HeroDesc,
  HeroHead,
  Img,
  ImgWrapper,
} from "./Header.styled";

import illustration from "assets/illustration-working.svg";
import { Container, Section } from "GlobalStyle";

export default function HeroSection() {
  return (
    <Section>
      <Container>
        <ImgWrapper>
          <Img src={illustration} alt="illustration" />
        </ImgWrapper>
        <HeroContent>
          <HeroHead>More than just shorter links</HeroHead>
          <HeroDesc>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </HeroDesc>
          <HeroBtn>Get started</HeroBtn>
        </HeroContent>
      </Container>
    </Section>
  );
}
