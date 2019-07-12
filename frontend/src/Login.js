import React, { Component } from "react";
import axios from "axios";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios
      .post("http://localhost:3000/auth/login", {
        email,
        password
      })
      .them(console.log("succesfully logged in"));
  };

  // do I keep it as name or change it to email?
  // *thinking emoji
  onInputChange = (email, event) => {
    console.log(this.state);
    this.setState({
      [email]: event.target.value
    });
  };

  render() {
    return (
      <>
        <Container className="LoginForm">
          <h3>Welcome! Please log in</h3>
          <Row>
            <Col md="6">
              <Form>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="password placeholder"
                  />
                </FormGroup>

                <Button>Login</Button>
              </Form>
            </Col>
            <Col md="6">
              <img src="https://fillmurray.com/g/300/300" alt="Moody" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
