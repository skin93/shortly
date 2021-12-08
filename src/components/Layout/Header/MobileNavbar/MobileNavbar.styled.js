import styled from "styled-components";

export const StyledNav = styled.nav`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 370px;
  margin-top: 25px;
  padding-block: 40px;
  padding-inline: 25px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary.darkViolet};
  border-radius: 10px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-inline: 50px;
  color: #fff;
  ${({ theme }) => theme.typography.poppins700};
`;

export const MenuItem = styled.li`
  color: #fff;
`;

export const Buttons = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutral.grayIsViolet};
  opacity: 0.3;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  ${({ theme }) => theme.typography.poppins700}
  border-radius: 30px;
  padding-block: 10px;
  border: none;
  background-color: ${(props) =>
    props.type === "signup" ? props.theme.colors.primary.cyan : "transparent"};
  color: #fff;

  &:hover {
    opacity: 0.6;
  }
`;
