import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";
import HomepageDate from "./HomepageDate";

export default class Homepage extends Component {
  render() {
    return (
      <Container>
        {/* Stats on right, cal */}
        <Row>
          <Col sm="6">
            <HomepageDate />
          </Col>
          <Col sm="6">
            <canvas id="myChart" width="400" height="400" />

            <p>Stats here</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
