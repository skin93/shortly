import { StyledNav, Menu, MenuItem, Buttons, Button } from "./Navbar.styled";

export default function Navbar() {
  return (
    <StyledNav>
      <Menu>
        <MenuItem>Features</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>Resources</MenuItem>
      </Menu>
      <Buttons>
        <Button type="login">Login</Button>
        <Button type="signup">Sign Up</Button>
      </Buttons>
    </StyledNav>
  );
}
