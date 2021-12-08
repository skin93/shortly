import { useState } from "react";
import { Logo, StyledContainer, StyledHeader } from "./Header.styled";
import Navbar from "components/Layout/Header/Navbar";

import Hamburger from "components/Layout/Header/Hamburger";

import logo from "assets/logo.svg";
import MobileNavbar from "components/Layout/Header/MobileNavbar";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(open);
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo src={logo} alt="logo" />
        <Navbar />
        <Hamburger handleClick={handleClick} />
      </StyledContainer>
      <StyledContainer>
        <MobileNavbar open={open} />
      </StyledContainer>
    </StyledHeader>
  );
}
