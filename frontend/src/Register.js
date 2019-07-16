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

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log("here");
    const { name, email, password } = this.state;
    axios
      .post("http://localhost:3000/auth/register", {
        name,
        email,
        password
      })
      .then(console.log("great success"));
  };

  onInputChange = (name, event) => {
    console.log(this.state);
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <>
        <Container className="LoginForm">
          <h3>Welcome!</h3>
          <h5>Sorry! You'll need to create an account to use this feature!</h5>
          <Row>
            <Col md="6">
              <Form onSubmit={this.onFormSubmit}>
                <FormGroup>
                  <Label for="Name">Name</Label>
                  <Input
                    type="name"
                    name="name"
                    id="Name"
                    placeholder="Name"
                    onChange={event => this.onInputChange("name", event)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="Email"
                    onChange={event => this.onInputChange("email", event)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="Password"
                    onChange={event => this.onInputChange("password", event)}
                  />
                </FormGroup>

                <Button type="submit">Register</Button>
              </Form>
              <p className="LoginLink">
                Or <a href="/">Login</a>
              </p>
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
