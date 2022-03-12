import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import purplleBack from "../../Assets/Projects/purplleBack.jpeg";
import purplleFront from "../../Assets/Projects/purplleFront.jpeg";
import desertCart from "../../Assets/Projects/desertCart.jpeg";
import mentoHome from "../../Assets/Projects/mentoHome.png";




function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={purplleBack}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Flatheads"
              description="Flatheads is an online application that acts as an e-commerce platform for people to purchase various sneakers. We were a six-person team that worked on this project for five days. My Participation This Project has a Product page. We developed both the frontend and backend for this project."
              link="https://github.com/kavya-2021/Purplle_Replica"
              links="https://purplle--clone.herokuapp.com/"
              blog="https://medium.com/@mayuriwasu2000/purplle-replica-2b62d88166f7"
              techstack="TECH-STACKS: EJS, CSS, mongoDb, ES6 JS, Express.js, Node.js."
              storage="DATABASE : MongoDb Atlas"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={desertCart}
              isBlog={false}
              isDeploy={true}
              title="American Eagle"
              description="It is an e-commerce web application that allows users to buy men's and women's clothing online. We were a five-person team that worked on this project for five days. The Landing Page is my contribution to this project."
              link="https://github.com/kavya-2021/DesertCart_Clone"
              links="https://rahulk612.github.io/desertCart/"
              techstack="TECH-STACKS : HTML, CSS, DOM, JavaScript"
              storage="DATABASE : Local Storage"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={purplleFront}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Flatheads"
              description="Flatheads is an online application that acts as an e-commerce platform for people to purchase various sneakers. We were a six-person team that worked on this project for five days. Product page is my contribution to this project. We mainly focused on developing Frontend in this project."
              links="https://nifty-sinoussi-82945f.netlify.app/"
              link="https://github.com/mayuriwasu1/purplle_clone"
              blog="https://purpllecloneteam.blogspot.com/2021/12/purplle-website-clone.html"
              techstack="TECH-STACKS : HTML, CSS, DOM, ES6 JS, localStorage concept"
              storage="DATABASE : Local Storage"

            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentoHome}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Mento"
              description=""
              links="https://.netlify.app/"
              link="https://github.com/"
              blog="https://medium.com"
              techstack = "TECH-STACKS : ReactJs, mongoDb, Express.js, Node.js, react-player, react-router-dom, Styled-Components "
              storage = "DATABASE : MongoDb Atlas & Served by Heroku." 

            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
