import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import habitHero from "../../Assets/Projects/habit hero.jpg";
import recipeGenerator from "../../Assets/Projects/recipe generator.png";
import twitterIcon from "../../Assets/Projects/twitter icon.jpg";

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
          {/* New projects - replace placeholders with real titles/descriptions/gh links */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={habitHero}
              isBlog={false}
              title="Habit Hero"
              description="A gamified habit tracking app that lets users set goals, track habits in real time, and earn XP and rewards upon completion. Built with an engaging interface, it motivates users to stay consistent by turning habit-building into a fun, game-like experience."
              ghLink="https://github.com/varun-varneker/Habit_Hero_Web"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipeGenerator}
              isBlog={false}
              title="Recipe Generator"
              description="A smart recipe suggestion platform built using TheMealDB API that generates recipe ideas based on user-input ingredients. It also fetches relevant YouTube cooking videos for each recipe, making it easier for users to explore and prepare dishes interactively."
              ghLink="https://github.com/varun-varneker/recipe-generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitterIcon}
              isBlog={false}
              title="Tweeter"
              description="A simple web app built with Python (Streamlit) that allows users to log in using Firebase Authentication and share their thoughts publicly. Other users can view shared posts in real time, creating an open and minimal platform for expression and interaction."
              ghLink="https://github.com/varun-varneker/tweet-website-Python-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
