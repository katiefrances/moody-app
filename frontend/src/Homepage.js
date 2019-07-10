import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";

export default class Homepage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="6">
            <p> lorem Quam sint saepe nam ut quam.</p>
          </Col>
          <Col sm="6">
            <p>
              <img src="https://fillmurray.com/g/300/300" />
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
