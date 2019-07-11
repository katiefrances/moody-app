import React from "react";
import Main from "./Main.css";

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
  render() {
    return (
      <>
        <Container className="LoginForm">
          <h3>Welcome! Please log in</h3>
          <Row>
            <Col md="6">
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>

                <Button>Login</Button>
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
