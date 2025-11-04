import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import colab from "../../Assets/TechIcons/colab.png";
import eclipse from "../../Assets/TechIcons/eclipse.png";
import powerbi from "../../Assets/TechIcons/PowerBI.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={colab} alt="colab" className="tech-icon-images" />
        <div className="tech-icons-text">Colab</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={powerbi} alt="powerbi" className="tech-icon-images" />
        <div className="tech-icons-text">Power BI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={eclipse} alt="eclipse" className="tech-icon-images" />
        <div className="tech-icons-text">Eclipse</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
