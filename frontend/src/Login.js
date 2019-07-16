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
      .then(console.log("succesfully logged in"));
  };

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
              <Form onSubmit={this.onFormSubmit}>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="with a placeholder"
                    onChange={event => this.onInputChange("email", event)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password placeholder"
                    onChange={event => this.onInputChange("password", event)}
                  />
                </FormGroup>

                <Button>Login</Button>
              </Form>
            </Col>
            <Col md="6">
              <img src="https://via.placeholder.com/200" alt="Moody" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
