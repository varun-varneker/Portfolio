import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Varun</span>{" "}
            from <span className="purple">Chennai, India</span>.
            <br />
            I’m a{" "}
            <span className="purple">Software Developer</span> focused on creating engaging {" "}
            <span className="purple">data-driven</span><span> applications</span>.
            <br />Pursuing a B.Tech in{" "}
            <span className="purple">Artificial Intellingence and Data Science</span> at{" "}
            <span className="purple">Agni Colllege Of Technology</span>.
            <br />
            <br />
            I enjoy teaming up with like-minded people to build projects that push ideas into action — feel free to reach out if you’d like to collaborate.
          </p>

          
          <p style={{ color: "rgb(155 126 172)" }}>
            "From concept to code."{" "}
          </p>
          <footer className="blockquote-footer">Varun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
