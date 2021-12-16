import {
  BoostHeader,
  BoostButton,
  StyledContainer,
  StyledSection,
} from "./Boost.styled";

export default function Boostsection() {
  return (
    <StyledSection>
      <StyledContainer>
        <BoostHeader>Boost your links today</BoostHeader>
        <BoostButton>Get started</BoostButton>
      </StyledContainer>
    </StyledSection>
  );
}
