import styled from "styled-components";

export const StyledNav = styled.nav`
  display: none;

  @media ${({ theme }) => theme.device.desktop} {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-inline: 50px;
  color: ${({ theme }) => theme.colors.neutral.grayIshViolet};
  ${({ theme }) => theme.typography.poppins700};
`;

export const MenuItem = styled.li``;

export const Buttons = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-left: auto;
  width: 240px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 120px;
  padding: 10px;
  ${({ theme }) => theme.typography.poppins700}
  border: none;
  border-radius: 30px;
  background-color: ${(props) =>
    props.type === "signup" ? props.theme.colors.primary.cyan : "transparent"};
  color: ${(props) =>
    props.type === "signup" ? "#fff" : props.theme.colors.neutral.grayIsViolet};

  &:hover {
    opacity: 0.6;
  }
`;
