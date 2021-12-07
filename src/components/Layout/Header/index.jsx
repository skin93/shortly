import { Logo, StyledContainer, StyledHeader } from "./Header.styled";
import Navbar from "components/UI/Navbar";

import Hamburger from "components/UI/Hamburger";

import logo from "assets/logo.svg";

export default function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo src={logo} alt="logo" />
        <Navbar />
        <Hamburger />
      </StyledContainer>
    </StyledHeader>
  );
}
