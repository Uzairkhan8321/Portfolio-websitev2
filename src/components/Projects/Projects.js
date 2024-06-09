import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Discord from "../../Assets/Projects/Discord.png";

import Weather  from "../../Assets/Projects/Weather.png";
import Netflix from "../../Assets/Projects/Netflix.png";
import Todo from "../../Assets/Projects/Todo.png";


function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={Netflix}
              isBlog={false}
              title="Netflix web-app"
              description="Developed a Netflix clone web application using React.js and Tailwind CSS, deployed on Firebase. Implemented user authentication for secure login and registration, created a responsive and visually appealing UI, and integrated Firebase for seamless data storage and retrieval."
              ghLink="https://github.com/Uzairkhan8321/react-netflix-clone"
              demoLink="https://react-netflix-clone-bc906.web.app/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="Developed a responsive weather app using HTML, CSS, and JavaScript, integrating the Weather API to provide real-time weather updates for any location. Designed a user-friendly interface with dynamic content updates, implemented search functionality, and ensured robust error handling for seamless user experience."
              ghLink="https://github.com/Uzairkhan8321/Weather-web-app"
              demoLink="https://uzairkhan8321.github.io/Weather-web-app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Discord}
              isBlog={false}
              title="Discord UI clone"
              description="Developed a Discord clone user interface using HTML and CSS, focusing on replicating the design and layout of the original application. Created responsive, visually appealing, and user-friendly components, ensuring cross-browser compatibility and adherence to modern web design standards.

              ."
              ghLink="https://github.com/Uzairkhan8321/Discord-clone"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Todo list application"
              description="Using React.js and Tailwind I created a Todo application with authentication and CRUD operations"
              ghLink="hhttps://github.com/Uzairkhan8321/Todo_List"
              demoLink="https://uzair06todolist.netlify.app/login" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
