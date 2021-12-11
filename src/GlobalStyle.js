import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const size = {
  mobile: "375px",
  desktop: "1440px",
};

const theme = {
  colors: {
    primary: {
      cyan: "hsl(180, 66%, 49%)",
      darkViolet: "hsl(257, 27%, 26%)",
    },
    secondary: {
      red: "hsl(0, 87%, 67%)",
    },
    neutral: {
      gray: "hsl(0, 0%, 75%)",
      grayIsViolet: "hsl(257, 7%, 63%)",
      veryDarkBlue: "hsl(255, 11%, 22%)",
      veryDarkViolet: "hsl(260, 8%, 14%)",
    },
  },
  device: {
    mobile: `(min-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop})`,
  },
  typography: {
    poppins500: ` font-family: 'Poppins', sans-serif;
    font-weight: 500;`,
    poppins700: ` font-family: 'Poppins', sans-serif;
    font-weight: 700;`,
  },
};

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
	line-height: 1;
    ${theme.typography.poppins500};
    overflow-x: hidden;
    min-height: 100vh;
    padding-top: 40px;
    font-size: 18px;
}
  ol, ul {
	list-style: none;
}
`;

export const Container = styled.div`
  width: 86vw;
  margin-inline: auto;
  display: flex;
  flex-direction: column;

  @media ${theme.device.desktop} {
    width: 77vw;
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledSection = styled.section`
  padding-block: 30px;
  position: relative;
  overflow-x: hidden;

  @media ${theme.device.desktop} {
    padding-block: 50px;
  }
`;

export { GlobalStyle, theme };
