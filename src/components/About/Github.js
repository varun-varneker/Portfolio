import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github({ username }) {
  const ghUser = username || process.env.REACT_APP_GITHUB_USERNAME || "varun-varneker";
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", color: "white" }}>
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username={ghUser}
        blockSize={16}
        blockMargin={6}
        color="#c084f5"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;
