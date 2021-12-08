import {
  PrimaryButton,
  SecondaryButton,
} from "components/UI/Button/Button.styled";
import { StyledNav, Menu, MenuItem, Buttons } from "./Navbar.styled";

export default function Navbar() {
  return (
    <StyledNav>
      <Menu>
        <MenuItem>Features</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>Resources</MenuItem>
      </Menu>
      <Buttons>
        <SecondaryButton>Login</SecondaryButton>
        <PrimaryButton>Sign Up</PrimaryButton>
      </Buttons>
    </StyledNav>
  );
}
