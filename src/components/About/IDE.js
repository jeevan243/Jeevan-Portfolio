import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGitpod,
  SiCodesandbox
} from "react-icons/si";

function IDE() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h3>VS Code</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGitpod />
        <h3>Gitpod</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCodesandbox />
        <h3>Codesandbox</h3>
      </Col>
    </Row>
  );
}

export default IDE;
