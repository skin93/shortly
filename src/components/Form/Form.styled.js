import styled from "styled-components";
import bgBoostDesk from "assets/bg-shorten-desktop.svg";
import bgBoostMobile from "assets/bg-boost-mobile.svg";
import { PrimaryButton } from "components/UI/Button/Button.styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 162px;
  border-radius: 10px;
  padding: 25px;
  gap: 15px;

  background-color: ${({ theme }) => theme.colors.primary.darkViolet};
  background-image: url(${bgBoostDesk});

  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: row;
    padding-inline: 65px;
    gap: 22px;
    align-items: center;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  /* align-items: center; */
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  ${({ theme }) => theme.typography.poppins500};
  color: ${({ theme }) => theme.colors.neutral.gray};
  border: 0;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  @media ${({ theme }) => theme.device.desktop} {
    padding: 15px;
  }
`;

export const Button = styled(PrimaryButton)`
  border-radius: 5px;

  @media ${({ theme }) => theme.device.desktop} {
    padding-block: 15px;
  }
`;
