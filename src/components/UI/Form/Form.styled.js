import styled from "styled-components";
import bgBoostDesk from "assets/bg-shorten-desktop.svg";
import bgBoostMobile from "assets/bg-boost-mobile.svg";
import { PrimaryButton } from "components/UI/Button/Button.styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-height: 162px;
  border-radius: 10px;
  padding: 25px;
  gap: 15px;

  background-color: ${({ theme }) => theme.colors.primary.darkViolet};
  background-image: url(${bgBoostMobile});

  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: row;
    padding-inline: 65px;
    gap: 22px;
    align-items: center;
    background-image: url(${bgBoostDesk});
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  font-size: 18px;
  ${({ theme }) => theme.typography.poppins500};

  border: ${({ error, theme }) =>
    error ? `4px solid ${theme.colors.secondary.red}` : 0};

  &::placeholder {
    color: ${({ theme, error }) =>
      error ? theme.colors.secondary.red : theme.colors.neutral.gray};

    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    padding: 10px 20px;
  }
`;

export const Error = styled.p`
  position: block;
  font-style: italic;
  color: ${({ theme }) => theme.colors.secondary.red};

  @media ${({ theme }) => theme.device.desktop} {
    position: absolute;
    bottom: -25px;
    left: 0;
  }
`;

export const Button = styled(PrimaryButton)`
  border-radius: 5px;

  @media ${({ theme }) => theme.device.desktop} {
    padding: 10px 20px;
  }
`;
