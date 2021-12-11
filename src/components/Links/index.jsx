import { useState, useRef } from "react";
import { Section, Container } from "GlobalStyle";
import {
  FormGroup,
  Input,
  StyledForm,
  Button,
  Error,
} from "components/UI/Form/Form.styled";
import {
  CopyButton,
  LinksContainer,
  LinkWrapper,
  OriginalLink,
  ShortLink,
  ShortLinkWrapper,
} from "./Links.styled";
import axios from "axios";

export default function Form() {
  const [input, setInput] = useState("");
  const [links, setLinks] = useState([]);
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.target.classList.add("copied");
    e.target.innerText = "Copied!";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input === "") {
      setError("Please add a link");
      return;
    }
    try {
      const res = await axios.post(`/shorten?url=${input}`);
      const result = await res.data.result;
      const linkObject = {
        original: result.original_link,
        short: result.full_short_link2,
      };
      setLinks((prev) => [...prev, linkObject]);
      setInput("");
      setError("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Section>
      <Container>
        <StyledForm onSubmit={handleSubmit}>
          <FormGroup style={{ flexBasis: "80%" }}>
            <Input
              name="link"
              value={input}
              error={error}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Shorten a link here..."
            />
            {error && <Error>{error}</Error>}
          </FormGroup>
          <Button style={{ flexBasis: "20%" }}>Shorten It!</Button>
        </StyledForm>
      </Container>
      <LinksContainer>
        {links?.length > 0 &&
          links.map((link, index) => (
            <LinkWrapper key={index}>
              <OriginalLink>{link.original}</OriginalLink>
              <ShortLinkWrapper>
                <ShortLink href={link.short}>{link.short}</ShortLink>
                <CopyButton onClick={handleClick}>Copy</CopyButton>
              </ShortLinkWrapper>
            </LinkWrapper>
          ))}
      </LinksContainer>
    </Section>
  );
}
