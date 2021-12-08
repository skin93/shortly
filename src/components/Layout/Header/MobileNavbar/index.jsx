import {
  PrimaryButton,
  SecondaryButton,
} from "components/UI/Button/Button.styled";
import {
  Buttons,
  Divider,
  Menu,
  StyledNav,
  MenuItem,
} from "./MobileNavbar.styled";

export default function MobileNavbar({ open }) {
  return (
    <StyledNav open={open}>
      <Menu>
        <MenuItem>Features</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>Resources</MenuItem>
      </Menu>
      <Divider />
      <Buttons>
        <SecondaryButton style={{ color: "#fff" }}>Login</SecondaryButton>
        <PrimaryButton>Sign Up</PrimaryButton>
      </Buttons>
    </StyledNav>
  );
}
