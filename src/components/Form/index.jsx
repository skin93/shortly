import { StyledSection, Container } from "GlobalStyle";
import { FormGroup, Input, Label, StyledForm, Button } from "./Form.styled";

export default function Form() {
  return (
    <StyledSection>
      <Container>
        <StyledForm>
          <FormGroup style={{ flexBasis: "80%" }}>
            <Input type="text" placeholder="Shorten a link here..." />
          </FormGroup>
          <Button style={{ flexBasis: "20%" }}>Shorten It!</Button>
        </StyledForm>
      </Container>
    </StyledSection>
  );
}
