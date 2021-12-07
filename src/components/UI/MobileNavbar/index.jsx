import { MenuItem } from "../Navbar/Navbar.styled";
import {
  Button,
  Buttons,
  Divider,
  Menu,
  StyledNav,
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
        <Button type="login">Login</Button>
        <Button type="signup">Sign Up</Button>
      </Buttons>
    </StyledNav>
  );
}
