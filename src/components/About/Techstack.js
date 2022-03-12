import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiNpm,
  DiGit
} from "react-icons/di";

import { SiRedux , SiRedis} from "react-icons/si";

function Techstack() {
  return (
    <Row id="skills" style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
        <h3>JavaScript</h3> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
           <DiHtml5 />
           <h3>HTML</h3> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h3>CSS</h3> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3>Node.js</h3> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h3>Redis</h3> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3>React</h3> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h3>Redux</h3> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h3>MongoDb</h3> 
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
        <h3>NPM</h3> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3>Git</h3> 
      </Col> 

    </Row>
  );
}

export default Techstack;
