import { StyledHamburger, Element } from "./Hamburger.styled";

export default function Hamburger({ handleClick }) {
  return (
    <StyledHamburger onClick={handleClick}>
      <Element />
      <Element />
      <Element />
    </StyledHamburger>
  );
}
