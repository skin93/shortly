import { createGlobalStyle } from "styled-components";

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
      grayishViolet: "hsl(257, 7%, 63%)",
      veryDarkBlue: "hsl(255, 11%, 22%)",
      beryDarkViolet: "hsl(260, 8%, 14%)",
    },
  },
  device: {
    mobile: `(min-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop})`,
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
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
}
  ol, ul {
	list-style: none;
}
`;

export { GlobalStyle, theme };
