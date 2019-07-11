import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";

export default class Homepage extends Component {
  render() {
    return (
      <Container>
        {/* Stats on right, cal */}
        <Row>
          <Col sm="6">
            <p> Calendar</p>
          </Col>
          <Col sm="6">
            <p>Stats here</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
