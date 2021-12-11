import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 30px;
  position: relative;
  overflow-x: hidden;
  background: hsl(230, 25%, 95%);

  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 100px;
  }
`;
