import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  ${({ theme }) => theme.typography.poppins700}
  border: none;
  border-radius: 30px;
  font-size: 18px;

  @media ${({ theme }) => theme.device.desktop} {
    width: 190px;
  }
`;

export const PrimaryButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.primary.cyan};
  color: #fff;
  &:hover {
    background-color: hsl(180, 66%, 69%);
  }
`;

export const SecondaryButton = styled(StyledButton)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.neutral.grayIsViolet};
  &:hover {
    color: #000;
  }
`;
