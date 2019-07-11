import React from "react";
import Main from "./Main.css";
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

export default class Login extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
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
          <h3>Welcome! Please log in</h3>
          <Row>
            <Col md="6">
              <Form onSubmit={this.onFormSubmit}>
                <FormGroup>
                  <Label for="exampleName">Name</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleName"
                    placeholder="Name"
                    onChange={event => this.onInputChange("name", event)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                    onChange={event => this.onInputChange("email", event)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                    onChange={event => this.onInputChange("password", event)}
                  />
                </FormGroup>

                <Button type="submit">Login</Button>
              </Form>
              <p>Or create an account</p>
            </Col>
            <Col md="6">
              <img src="https://fillmurray.com/g/300/300" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
