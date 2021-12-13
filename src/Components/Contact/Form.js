import React, { Component } from "react";
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

const config = {
  script:
    "https://script.google.com/macros/s/AKfycbzuOQKxjnfkd7wcqbFz53byaA_tOCZvsZivd9a4cHJTHT6WFw50HvTF79oBMw67hQ8t/exec",
  sheet: "responses",
  email: "hellorithvik14@gmail.com",
};

const Thanks = () => (
  <div className="thankyou_message">
    <h2>Thanks for contacting me! I will get back to you soon!</h2>
  </div>
);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        email: "",
      },
      sent: false,
      clicked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { form } = this.state;

    // loading
    this.setState({ clicked: true });

    // sent
    const setSent = () => {
      this.setState({ sent: true });
    };

    // sending through xhr as axios won't work (CORS)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", config.script);
    // xhr.withCredentials = true
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function xhrGo() {
      setSent();
    };
    const encoded = Object.keys(form)
      .map((k) => {
        return `${encodeURIComponent(k)}=${encodeURIComponent(form[k])}`;
      })
      .join("&");

    // finally sending
    xhr.send(encoded);
    return true;
  };

  handleChange = ({ target }) => {
    const { id, value } = target;
    const { state } = this;
    state.form[id] = value;
    this.setState(state);
  };

  render() {
    const {
      form: { name, email },
      sent,
      clicked,
    } = this.state;

    return (
      <>
        {sent ? (
          <Thanks />
        ) : (
          <>
            <Container>
              <FormWrap>
                <Icon to="/">
                  <img src={logo} alt="Logo" width="100px" />
                </Icon>
                <FormContent>
                  <Form2 action={config.script} method="POST">
                    <FormH1>Contact Me</FormH1>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormInput
                      onChange={this.handleChange}
                      id="name"
                      key="name"
                      name="name"
                      value={name}
                      required
                    />
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput
                      onChange={this.handleChange}
                      type="email"
                      key="email"
                      id="email"
                      name="email"
                      value={email}
                      required
                    />
                    {clicked ? (
                      <FormButton type="button">Loading</FormButton>
                    ) : (
                      <FormButton
                        type="button"
                        onClick={() => this.handleClick()}
                      >
                        Submit
                      </FormButton>
                    )}
                  </Form2>
                </FormContent>
              </FormWrap>
            </Container>
          </>
        )}
      </>
    );
  }
}

export default Form;
