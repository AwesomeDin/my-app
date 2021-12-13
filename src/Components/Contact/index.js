import React from "react";
import {
  FormButton,
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form2,
  FormH1,
  FormLabel,
  FormInput,
} from "./ContactElements";
import logo from "../Navbar/rithvikdineshlogo3.png";

const Contact = () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to="/">
            <img src={logo} alt="Logo" width="100px" />
          </Icon>
          <FormContent>
            <Form2
              action="https://script.google.com/macros/s/AKfycbzuOQKxjnfkd7wcqbFz53byaA_tOCZvsZivd9a4cHJTHT6WFw50HvTF79oBMw67hQ8t/exec"
              method="POST"
              className="gform"
            >
              <FormH1>Contact Me</FormH1>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput type="text" id="name" name="name" required />
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" id="email" name="email" required />
              <FormButton type="submit">Submit</FormButton>
            </Form2>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
};

export default Contact;
