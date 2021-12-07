import styled from "styled-components";

export const StyledNav = styled.nav`
  display: none;

  @media ${({ theme }) => theme.device.desktop} {
    display: inline-flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-inline: 50px;
  color: ${({ theme }) => theme.colors.neutral.grayIshViolet};
  ${({ theme }) => theme.typography.poppins700};

  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: row;
  }
`;

export const MenuItem = styled.li``;

export const Buttons = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;

  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: row;
    margin-left: auto;
    width: 240px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  ${({ theme }) => theme.typography.poppins700}
  border-radius: 30px;
  border: none;
  background-color: ${(props) =>
    props.type === "signup" ? props.theme.colors.primary.cyan : "transparent"};
  color: ${(props) =>
    props.type === "signup"
      ? "#fff"
      : props.theme.colors.neutral.grayIshViolet};

  &:hover {
    opacity: 0.6;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 120px;
    padding: 10px;
  }
`;
