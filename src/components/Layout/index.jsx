import { Container } from "GlobalStyle";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container as="main">{children}</Container>
      <Footer />
    </>
  );
}
