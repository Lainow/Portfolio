import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { ImGithub } from "react-icons/im";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Mes contributions <strong className="blue"><ImGithub /></strong>
      </h1>
      <GitHubCalendar
        username="Lainow"
        blockSize={15}
        blockMargin={5}
        color="#62c5ff"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
