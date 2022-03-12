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
              title="Purplle"
              description="An e-commerce website for purchasing fashion and skincare products. Features unique to this website are , it has a very Dynamic Home page, Advanced filtering options. Skin Type testing and suggestions related to products based on test results.Is has a very vibrant wishlist page and wide range of products."
              link="https://github.com/kavya-2021/Purplle_Replica"
              links="https://purplle--clone.herokuapp.com/"
              blog="https://medium.com/@mayuriwasu2000/purplle-replica-2b62d88166f7"
              techstack = "TECH-STACKS : EJS, mongoDb, JS , Express.js, Node.js."
              storage = "DATABASE : MongoDb Atlas"

            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={desertCart}
              isBlog={false}
              isDeploy={true}
              title="Desert Cart"
              description= "An e-commerce website for purchasing and importing products available for import from different countries.Products can be shipped to 163+ countries Wide variety of products. There are filters that can filter products depending on importing country and delivery time. Achieved most of the features that are similiar to reference website "
              link="https://github.com/kavya-2021/DesertCart_Clone"
              links="https://rahulk612.github.io/desertCart/"
              techstack = "TECH-STACKS : HTML, CSS, DOM, JavaScript"
              storage = "DATABASE : Local Storage"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={purplleFront}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Purplle"
              description="An e-commerce website for purchasing fashion and skincare products. Features unique to this website are , it has a very Dynamic Home page, Advanced filtering options. Skin Type testing and suggestions related to products based on test results.Is has a very vibrant wishlist page and wide range of products."
              links="https://nifty-sinoussi-82945f.netlify.app/"
              link="https://github.com/mayuriwasu1/purplle_clone"
              blog="https://purpllecloneteam.blogspot.com/2021/12/purplle-website-clone.html"
              techstack = "TECH-STACKS : HTML, CSS, DOM, ES6 JS, localStorage concept"
              storage = "DATABASE : Local Storage"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentoHome}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Mento"
              description="Mento is a platform which guides its users with the career options. Mento aims to solve that problem by providing first hand in-depth career advice from the biggest and best in each field. You'll get all the information you need to decide if a particular career is for you or not."
              links="https://mento-clone.netlify.app/"
              link="https://github.com/kavya-2021/Mento-Clone"
              blog="https://medium.com/@vankadaralakshmikavya/mento-website-clone-2797b31102bb"
              techstack = "TECH-STACKS : ReactJs, mongoDb, Express.js, Node.js, react-player, react-router-dom, Styled-Components "
              storage = "DATABASE : MongoDb Atlas & Served by Heroku." 

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
