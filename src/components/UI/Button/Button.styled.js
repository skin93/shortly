import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  ${({ theme }) => theme.typography.poppins700}
  border: none;
  border-radius: 30px;

  @media ${({ theme }) => theme.device.desktop} {
    width: 120px;
  }
`;

export const PrimaryButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.primary.cyan};
  color: #fff;
  &:hover {
    opacity: 0.6;
  }
`;

export const SecondaryButton = styled(StyledButton)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.neutral.grayIsViolet};
  &:hover {
    color: #000;
  }
`;
